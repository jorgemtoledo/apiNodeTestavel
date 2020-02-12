import express from 'express';
import LeadsController from '../controllers/leads';

const router = express.Router();
const leadsController = new LeadsController();
router.get('/', (req, res) => leadsController.get(req, res));

export default router;