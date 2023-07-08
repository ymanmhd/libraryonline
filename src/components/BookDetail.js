import React, { useState, } from 'react';
import { Link , useParams} from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';



function BookDetail (props){

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
    // Fetch the book data from the API using the book id from the URL params
    const { id } = useParams();

    fetch(`https://www.dbooks.org/api/book/${id}`)
      .then(response => response.json())
      .then(data => {
        // Update the state with the book data and set loading to false
        setBook(data);
          setLoading(false);
        
      })
      .catch(error => {
        // Handle any errors and set error to true
        
          setError(true);
          setLoading(false);
      });
  

 
    // If the state is loading, show a loading message
    if (loading) {
      return <div>Loading...</div>;
    }

    // If the state has an error, show an error message
    if (error) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    // If the state has a book, show the book details
    if (book) {
      const { title, authors, publisher, description, image ,year} = book;
      return (
        <Card className="book-detail">
          <CardMedia
            className="book-cover"
            component="img"
            height="50%"
            image={image}
            title={title}
          />
          <CardContent className="book-info">
            <Typography variant="h5" component="h1" className="book-title">
              {title}
            </Typography>
            <Typography variant="h6" component="p" className="book-author">
              by {authors}
            </Typography>
            <Typography variant="subtitle1" component="p" className="book-genre">
              {publisher} - {year}
            </Typography>
            <Typography variant="body1" component="p" className="book-description">
              {description}
            </Typography>
            <Typography variant="body2" component="p" className="book-price">
              $20
            </Typography>
            <button className="book-add-to-cart">Add to cart</button>
            <Link to="/" className="book-back-to-home">Back to home</Link>
          </CardContent>
        </Card>
      );
    }

    // Otherwise, return null
    return null;
  };

export default BookDetail;
