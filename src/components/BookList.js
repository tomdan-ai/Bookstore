import React from 'react';
import PropTypes from 'prop-types';
import IndividualBook from './IndividualBook';
import style from './styles/Books.module.css';

const BookList = ({ books, onDelete }) => (
  <div className={style.bookList}>
    {books.map((book) => (
      <IndividualBook key={book.id} book={book} onDelete={onDelete} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      writer: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
