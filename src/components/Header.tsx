import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #3498db;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Магазин смартфонов</Logo>
      <Nav>
        <Link to="/">Главная</Link>
        <Link to="/data">Товары</Link>
        <Link to="/order">Оформить заказ</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
