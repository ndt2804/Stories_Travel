import express from 'express';
import { homeController } from '../controllers/HomeController';

const router = express.Router();

// route
router.use('/', homeController);

export default router;