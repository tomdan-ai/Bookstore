import React, { useState } from 'react';
import style from './styles/Books.module.css';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [writer, setWriter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.random().toString(),
      title,
      category,
      writer,
      progress: 0,
      chapter: 'Chapter 1',
    };
    onAdd(newBook);
    setTitle('');
    setCategory('');
    setWriter('');
  };

  return (
    <div className={style.addBook}>
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
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />
        <button className={style.addBtn} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
