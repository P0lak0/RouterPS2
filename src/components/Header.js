import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Link to="/books">Список книг</Link>
    </nav>
  );
};

export default Header;