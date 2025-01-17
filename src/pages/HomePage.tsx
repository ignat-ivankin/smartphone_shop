import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import Layout from '../components/Layout';
import 'slick-carousel/slick/slick.css'; // Импорт стилей для слайдера
import 'slick-carousel/slick/slick-theme.css'; // Тема для слайдера
import op13img from '../../public/img/op13-slider.jpg'
import s24uimg from '../../public/img/s24u-slider.png'
import ip16proimg from '../../public/img/ip16pro-slider.jpg'

// Стили для контейнера страницы
const Container = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

// Стили для заголовка
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

// Стили для описания
const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #555;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

// Стили для кнопок
const StyledLink = styled(Link)`
  margin: 20px 10px;
  padding: 10px 20px;
  text-decoration: none;
  background-color: ${(props) => (props.to === '/order' ? '#007bff' : '#28a745')};
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.to === '/order' ? '#0056b3' : '#1e7e34')};
  }
`;

// Стили для слайдера
const SliderWrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  max-width: 800px;
`;

const HomePage: React.FC = () => {
  // Настройки для слайдера
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Layout>
      <Container>
        <Title>Добро пожаловать в наш магазин смартфонов!</Title>
        <Description>У нас вы найдете самые современные устройства по лучшим ценам.</Description>

        {/* Слайдер */}
        <SliderWrapper>
          <Slider {...sliderSettings}>
            <div>
              <img
                src='/img/op13-slider.jpg'
                alt="OnePlus 13"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </div>
            <div>
              <img
                src='/img/s24u-slider.png'
                alt="Samsung Galaxy S24 Ultra"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </div>
            <div>
              <img
                src='/img/ip16pro-slider.jpg'
                alt="Iphone 16 Pro Max"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </div>
          </Slider>
        </SliderWrapper>

        {/* Ссылки на страницы */}
        <LinkContainer>
          <StyledLink to="/order">Перейти к заказу</StyledLink>
          <StyledLink to="/data">Посмотреть товары</StyledLink>
        </LinkContainer>
      </Container>
    </Layout>
  );
};

export default HomePage;
