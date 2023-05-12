import React from 'react';
// import { FaTrash } from 'react-icons/fa';
import style from './styles/Books.module.css';

const IndividualBook = ({ book, onDelete }) => {
  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div className={style.action}>
      <div className={style.actionText}>
        <p className={style.cat}>{book.category}</p>
        <h2>{book.title}</h2>
        <p className={style.writer}>{book.writer}</p>
        <ul className={style.actionUl}>
          <li className={style.actionLi}>Comments</li>
          <div className={style.small} />
          <li className={style.actionLi} onClick={handleDelete}>
            Remove
          </li>
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
              {book.progress}
              %
            </p>
            <p className={style.txt}>Completed</p>
          </div>
        </div>
        <div className={style.big} />
        <div className={style.actionProgress}>
          <p className={style.CC}>CURRENT CHAPTER</p>
          <p className={style.CN}>{book.chapter}</p>
          <button className={style.updateBtn} type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default IndividualBook;
