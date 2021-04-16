import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AuthorBooks = ({ books }) => {
  return (
    <>
      {/* <ul>
        {books.books.map(book => (
          <li key={book.id}>
            <Link to={`/library/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul> */}
      <h1>Книги автора: {books.name} </h1>
      <ul>
        {books.books.map(book => (
          <li key={book.id}>
            <Link to={`/library/${book.id}`}>{book.title}</Link>
            {/* <p>{book.genre}</p> */}
            <img src={book.imgUrl} alt="book" width="200" height="auto"></img>
            {/* <p>{book.descr}</p> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AuthorBooks;
