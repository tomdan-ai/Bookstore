import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import IndividualBook from './IndividualBook';
import { fetchBooks } from '../redux/books/booksSlice';
import style from './styles/Books.module.css';

const BookList = ({ onDelete }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error occurred while fetching books.</div>;
  }

  const bookComponents = [];

  for (let i = 0; i < books.length; i += 1) {
    const book = books[i];
    bookComponents.push(<IndividualBook key={book.item_id} book={book} onDelete={onDelete} />);
  }

  return <div className={style.bookList}>{bookComponents}</div>;
};

BookList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
