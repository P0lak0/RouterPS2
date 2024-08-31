import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchBooks } from '../data/mockData';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    getBooks();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск книг..."
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />
      <ul>
        {books
          .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
          .map((book) => (
            <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookList;