import React from 'react';

const NewBookForm = () => {
  return (
    <form>
      <input type="text" placeholder="Название книги" required />
      <textarea placeholder="Описание" required></textarea>
      <button type="submit">Добавить книгу</button>
    </form>
  );
};

export default NewBookForm;
