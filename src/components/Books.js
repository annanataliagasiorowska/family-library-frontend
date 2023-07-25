import React from 'react';
import Book from './Book';

const Books = ({ books }) => {
  return (
    <ul> 
      {books.map((book, index) => (
        <Book 
          key={index} 
          title={book.title} 
          author={book.authorLastName} 
          releaseYear={book.releaseYear}
        />
      ))}
    </ul>
  );
};

export default Books;
