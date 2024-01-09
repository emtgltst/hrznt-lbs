import express from 'express';
import numbersController from '../controllers/numbersController';

const router = express.Router();

router.post('/', numbersController);

export default router;
