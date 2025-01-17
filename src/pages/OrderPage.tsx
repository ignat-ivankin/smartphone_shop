import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Layout from '../components/Layout';

// Стили для контейнера формы
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

// Стили для заголовка
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

// Стили для формы
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Стили для каждого поля формы
const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Стили для кнопки отправки формы
const SubmitButton = styled.button`
  padding: 10px;
  font-size: 1.1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

interface Order {
  name: string;
  phone: string;
  product: string;
}

const OrderPage: React.FC = () => {
  const [formData, setFormData] = useState<Order>({
    name: '',
    phone: '',
    product: '',
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.phone || !formData.product) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/order', formData);
      setSuccess(response.data.message);
    } catch (error) {
      setError('Произошла ошибка при отправке заказа. Попробуйте снова.');
    }
  };

  return (
    <Layout>
      <Title>Оформление заказа</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ваше имя"
        />
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Ваш телефон"
        />
        <Input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleChange}
          placeholder="Выберите товар"
        />
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        {success && <div style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}
        <SubmitButton type="submit">Отправить заказ</SubmitButton>
      </Form>
    </Layout>
  );
};

export default OrderPage;
