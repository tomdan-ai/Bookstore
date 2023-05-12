import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import style from './styles/Books.module.css';

const Books = () => {
  const [books, setBooks] = useState([
    {
      id: '1',
      title: 'The Hunger Games',
      category: 'Action',
      writer: 'Suzanne Collins',
      progress: 0,
      chapter: 'Chapter 1',
    },
    {
      id: '2',
      title: 'Dune',
      category: 'Science Fiction',
      writer: 'Frank Herbert',
      progress: 0,
      chapter: 'Chapter 1',
    },
    {
      id: '3',
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
      writer: 'Suzanne Collins',
      progress: 0,
      chapter: 'Chapter 1',
    },
  ]);

  // Add a new book to the list
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Remove a book from the list
  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <div className={style.cover}>
        {/* Existing book list */}
        <BookList books={books} onDelete={handleDeleteBook} />

        {/* Add new book form */}
        <BookForm onAdd={handleAddBook} />
      </div>
    </div>
  );
};

export default Books;
