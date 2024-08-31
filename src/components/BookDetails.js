import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooks } from '../data/mockData';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      const foundBook = data.find((b) => b.id === parseInt(id));
      setBook(foundBook);
    };
    getBooks();
  }, [id]);

  if (!book) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
