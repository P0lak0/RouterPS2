import React from 'react';

const SubscribeForm = () => {
  return (
    <form>
      <input type="email" placeholder="Введите ваш email" required />
      <button type="submit">Подписаться</button>
    </form>
  );
};

export default SubscribeForm;
