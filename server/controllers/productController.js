import products from './product.js'; // Модели данных

// Получение списка продуктов
const getProducts = (req, res) => {
  res.json(products); // Отправка списка продуктов в ответ
};
  
export { getProducts };
