import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './styles/Navbar.module.css';

const Navbar = () => (
  <div>
    <nav className={style.navbar}>
      <ul className={style.navul}>
        <li className={style.navli1}>Bookstore CMS</li>
        <Link to="/"><li className={style.navli}>BOOKS</li></Link>
        <Link to="/categories"><li className={style.navli}>CATEGORIES</li></Link>
        <button className={style.person} type="button">
          <FaUser height={20} width={40} color="#0290ff" />
          .
        </button>
      </ul>
    </nav>
  </div>
);

export default Navbar;
