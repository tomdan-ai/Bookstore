import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const IndividualBook = ({ book, onDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(book.item_id))
      .then(() => {
        onDelete();
      })
      .catch((error) => {
        console.warn('Error occurred while removing book:', error);
      });
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        Author:
        {' '}
        {book.author}
      </p>
      <p>
        Category:
        {' '}
        {book.category}
      </p>
      <button onClick={handleDelete} type="button">Remove</button>
    </div>
  );
};

IndividualBook.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IndividualBook;
