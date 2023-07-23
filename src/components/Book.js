import React from 'react';

const Book = ({ title, author, releaseYear }) => {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{releaseYear}</p>
    </div>
  );
};

export default Book;
