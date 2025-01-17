import { Router } from 'express';
import { getProducts } from '../controllers/productController.js';

const router = Router();

// Получение списка продуктов
router.get('/', getProducts);

export default router;
