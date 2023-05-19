import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import style from './styles/Books.module.css';

const IndividualBook = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div className={style.action}>
      <div className={style.actionText}>
        <p className={style.cat}>{book.category}</p>
        <h2>{book.title}</h2>
        <p className={style.writer}>{book.author}</p>
        <ul className={style.actionUl}>
          <li className={style.actionLi}>Comments</li>
          <div className={style.small} />
          <li className={style.actionLi} onClick={handleDelete}>Remove</li>
          <div className={style.small} />
          <li className={style.actionLi}>Edit</li>
          <div className={style.small} />
        </ul>
      </div>
      <div className={style.actionRating}>
        <div className={style.actionScale}>
          <div className={style.scale1} />
          <div className={style.rater}>
            <p className={style.percent}>
              67%
            </p>
            <p className={style.txt}>Completed</p>
          </div>
        </div>
        <div className={style.big} />
        <div className={style.actionProgress}>
          <p className={style.CC}>CURRENT CHAPTER</p>
          <p className={style.CN}>Chapter 17</p>
          <button className={style.updateBtn} type="button">UPDATE PROGRESS</button>
        </div>
      </div>
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
};

export default IndividualBook;
