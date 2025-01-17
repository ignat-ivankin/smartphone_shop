import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Магазин смартфонов. Все права защищены.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
