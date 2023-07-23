import React from 'react';
import Book from './Book';

const Books = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <Book key={index} title={book.title} author={book.authorLastName} releaseYear={book.releaseYear}/>
      ))}
    </div>
  );
};

export default Books;
