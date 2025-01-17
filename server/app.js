import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Маршруты
app.use('/products', productRoutes);
app.use('/order', orderRoutes);

// Запуск сервера
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
