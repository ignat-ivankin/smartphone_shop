import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Сброс базовых стилей */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Основные стили для HTML и body */
  html, body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
    height: 100%;
  }

  /* Стили для ссылок */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Базовые стили для кнопок */
  button {
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Контейнер для центровки */
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
