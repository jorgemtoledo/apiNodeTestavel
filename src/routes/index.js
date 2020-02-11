import express from 'express';
import productsRoute from './products';
import leadsRoute from './leads';

const router = express.Router();

router.use('/products', productsRoute);
router.use('/leads', leadsRoute);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;