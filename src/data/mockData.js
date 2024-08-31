const books = [
    { id: 1, title: '1984', description: 'Роман-утопия Джорджа Оруэлла.' },
    { id: 2, title: 'Мастер и Маргарита', description: 'Роман Михаила Булгакова.' },
    { id: 3, title: 'Война и мир', description: 'Эпопея Льва Толстого.' },
  ];
  
  export const fetchBooks = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(books);
      }, 1000);
    });
  };
  