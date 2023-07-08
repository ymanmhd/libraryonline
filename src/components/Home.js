import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    // Fetch the books data from the API
    fetch('https://www.dbooks.org/api/recent')
      .then(response => response.json())
      .then(data => {
        // Update the state with the books data and set loading to false
        this.setState({
          books: data.books,
          loading: false
        });
      })
      .catch(error => {
        // Handle any errors and set error to true
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  render() {
    // If the state is loading, show a loading message
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    // If the state has an error, show an error message
    if (this.state.error) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    // If the state has books, show the books list
    if (this.state.books) {
      return (
        <div className="home">
          <h1 className="home-title">Welcome to Library Online Store</h1>
          <p className="home-subtitle">Browse our collection of books and order online</p>
          <div className="books-list">
            {this.state.books.map(book => (
              <div key={book.id} className="book-card">
                <div className="hoom-book-cover">
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="book-info">
                  <h2 className="book-title">{book.title}</h2>
                  <p className="book-author">by {book.authors}</p>
                  <p className="book-price">$20</p>
                  {/* <p className="book-price">${book.price}</p> */}
                  <Link to={`/books/${book.id}`} className="book-detail-link">View details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Otherwise, return null
    return null;
  }
}

export default Home;
