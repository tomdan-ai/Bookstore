import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import style from './styles/Books.module.css';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      title,
      category,
      author,
    }));

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className={style.addBook}>
      <div className={style.div} />
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <input
          type="text"
          placeholder="Writer"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className={style.addBtn} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
