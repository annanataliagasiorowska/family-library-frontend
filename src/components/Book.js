import React from 'react';

const Book = ({ title, author, releaseYear }) => {
  return (
    <li className="book">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{releaseYear}</p>
    </li>
  );
};

export default Book;
