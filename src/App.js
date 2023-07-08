// Import React and other libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import custom components
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Cart from "./components/Cart.js";

// Define the main App component
function App() {
  // Define the state variables for books and cart
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  // Define a function to fetch books data from an API
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://www.dbooks.org/api/recent" // Replace with your own API endpoint
      );
      setBooks(response.data.books);
    } catch (error) {
      console.error(error);
    }
  };

  // Define a function to add a book to the cart
  const addToCart = (book) => {
    // Check if the book is already in the cart
    const existingItem = cart.find((item) => item.id === book.id);
    if (existingItem) {
      // Increase the quantity by one
      existingItem.quantity++;
      // Update the cart state with the new item
      setCart([...cart]);
    } else {
      // Add the book to the cart with a quantity of one
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  // Define a function to remove a book from the cart
  const removeFromCart = (book) => {
    // Filter out the book from the cart
    const newCart = cart.filter((item) => item.id !== book.id);
    // Update the cart state with the new array
    setCart(newCart);
  };

  // Define a function to clear the cart
  const clearCart = () => {
    // Set the cart state to an empty array
    setCart([]);
  };

  // Use useEffect hook to fetch books data when the component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      {/* Use BrowserRouter to enable routing */}
      <BrowserRouter>
        {/* Render the Header component */}
        <Header />
        {/* Use Switch to render different components based on the path */}
        <Routes>
          {/* Render the Home component for the root path */}
          <Route exact path="/" element={ <Home />}>
          </Route>
          {/* Render the BookList component for the /books path */}
          <Route exact path="/books" element={<BookList books={books} addToCart={addToCart} />}>
          </Route>
          {/* Render the BookDetail component for the /books/:id path */}
          <Route exact path="/books/:id" element={<BookDetail books={books} addToCart={addToCart} />}>  
          </Route>
          {/* Render the Cart component for the /cart path */}
          <Route exact path="/cart" element={            <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
}>
          </Route>
        </Routes>
        {/* Render the Footer component */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// Export the App component
export default App;

