import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';
import { addBook, removeBook } from '../redux/books/booksSlice';
import style from './styles/Books.module.css';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <div className={style.cover}>
        <BookList books={books} onDelete={handleDeleteBook} />
        <BookForm onAdd={handleAddBook} />
      </div>
    </div>
  );
};

export default Books;
