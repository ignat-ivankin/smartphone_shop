import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Стили для страницы 404
const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const NotFoundTitle = styled.h1`
  font-size: 4rem;
  color: #e74c3c;
`;

const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: #2c3e50;
`;

const GoBackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-size: 1.2rem;
  text-decoration: none;
  color: #3498db;

  &:hover {
    text-decoration: underline;
  }
`;

const PageNotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Страница не найдена</NotFoundTitle>
      <NotFoundMessage>К сожалению, эта страница не существует.</NotFoundMessage>
      <GoBackLink to="/">Вернуться на главную</GoBackLink>
    </NotFoundContainer>
  );
};

export default PageNotFound;
