import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const IndividualBook = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        Author:
        {book.author}
      </p>
      <p>
        Category:
        {book.category}
      </p>
      <button onClick={handleDelete} type="button">Remove</button>
    </div>
  );
};

export default IndividualBook;
