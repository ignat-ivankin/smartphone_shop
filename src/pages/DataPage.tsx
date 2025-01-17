import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Layout from '../components/Layout';

// Стили для контейнера страницы
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Стили для заголовка
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

// Стили для сетки карточек
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  align-items: start; /* Устанавливаем начальное выравнивание для всех элементов */
`;

// Стили для одной карточки
const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.3s;
  overflow: hidden; /* Скрываем содержимое, выходящее за границы */
  position: relative; /* Создаём контекст для абсолютного позиционирования ExtraInfo */
  cursor: pointer;
  z-index: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
`;

// Стили для изображения товара
const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: #ffffff;
`;

// Стили для содержимого карточки
const CardContent = styled.div`
  padding: 15px;
  text-align: center;
  background-color: #f1f1f1;
`;

// Стили для названия товара
const ProductName = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
`;

// Стили для цены товара
const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #28a745;
  font-weight: bold;
`;

const ExtraInfo = styled.div`
  max-height: 300px; /* Фиксируем высоту для предотвращения "прыжков" */
  overflow: hidden;
  opacity: 0; /* Изначально скрыто */
  transition: opacity 0.3s ease, padding 0.3s ease; /* Плавность изменения прозрачности и отступов */
  background-color: rgba(255, 255, 255, 0.9);
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 15px; /* Изначально отсутствуют отступы */
  border-radius: 10px 10px 0 0;
  z-index: 20;

  /* При наведении на карточку раскрываем блок */
  ${Card}:hover & {
    opacity: 1; /* Делаем текст видимым */
    padding: 15px; /* Добавляем отступы для комфортного чтения */
  }
`;


const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Стили для сообщения об ошибке
const ErrorMessage = styled.div`
  color: red;
  margin-top: 20px;
  text-align: center;
`;

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  colors?: string[];
  memory?: string[];
  soc?: string
}

const DataPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 6; // Количество товаров на странице

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Произошла ошибка при загрузке данных');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Рассчитываем индексы товаров для текущей страницы
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Переключение страниц
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <Layout>
      <Container>
        <Title>Список товаров</Title>
        {loading && <p>Загрузка...</p>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!loading && !error && (
          <>
            <CardGrid>
              {currentProducts.map((product) => (
                <Card key={product.id}>
                  <ProductImage src={product.image} alt={product.name} />
                  <CardContent>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.price} ₽</ProductPrice>
                  </CardContent>
                  <ExtraInfo className="extra-info">
                    <p>{product.description}</p>
                    <br></br>
                    {product.colors && (
                      <p>Доступные цвета: {product.colors.join(', ')}</p>
                    )}
                    {product.memory && (
                      <p>Объём памяти: {product.memory.join(', ')}</p>
                    )}
                    {product.soc && (
                      <p>Процессор: {product.soc}</p>
                    )}
                  </ExtraInfo>
                </Card>
              ))}
            </CardGrid>
            <PaginationContainer>
              <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
                Назад
              </PaginationButton>
              <PaginationButton onClick={nextPage} disabled={currentPage === totalPages}>
                Вперёд
              </PaginationButton>
            </PaginationContainer>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default DataPage;