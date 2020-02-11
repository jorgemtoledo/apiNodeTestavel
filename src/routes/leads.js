import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send([{
  email: 'maria@mail.com.br'
}]));

export default router;