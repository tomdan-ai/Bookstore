import React from 'react';
import IndividualBook from './IndividualBook';
import style from './styles/Books.module.css';

const BookList = ({ books, onDelete }) => (
  <div className={style.bookList}>
    {books.map((book) => (
      <IndividualBook key={book.id} book={book} onDelete={onDelete} />
    ))}
  </div>
);

export default BookList;
