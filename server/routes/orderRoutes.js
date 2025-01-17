import { Router } from 'express';
import { createOrder } from '../controllers/orderController.js';

const router = Router();

// Создание заказа
router.post('/', createOrder);

export default router;
