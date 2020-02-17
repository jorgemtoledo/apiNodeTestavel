import express from 'express';
import LeadsController from '../controllers/leads';
import Lead from '../models/lead';

const router = express.Router();
const leadsController = new LeadsController(Lead);
router.get('/', (req, res) => leadsController.get(req, res));

export default router;