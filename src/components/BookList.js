
// Import React and other libraries
import React from "react";
import { Link } from "react-router-dom";

// Define the BookList component
function BookList({ books, addToCart }) {
  // Define a function to format the price
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  // Define a function to render a single book card
  const renderBook = (book) => {
    return (
      <div className="book-card" key={book.id}>
        <div className="book-image">
          <Link to={`/books/${book.id}`}>
            <img src={book.image} alt={book.title} />
          </Link>
        </div>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">by {book.author}</p>
          <p className="book-price">{formatPrice(book.price)}</p>
          <button className="add-to-cart" onClick={() => addToCart(book)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="book-list">
      <h1 className="page-title">Books</h1>
      <div className="book-grid">
        {/* {Map over the books array and render each book } */}
        {books.map((book) => renderBook(book))}
      </div>
    </div>
  );
}

// Export the BookList component
export default BookList;