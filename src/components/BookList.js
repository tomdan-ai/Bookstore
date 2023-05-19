import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IndividualBook from './IndividualBook';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Erro while fetching books
      </div>
    );
  }

  return (
    <div>
      {books.map((book) => (
        <IndividualBook
          book={book}
          key={book.id}
        />
      ))}
    </div>
  );
};
export default BookList;
