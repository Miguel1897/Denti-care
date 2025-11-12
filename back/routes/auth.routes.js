// back/routes/auth.routes.js
import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// getinfo
router.get('/getinfo', verifyToken, authController.getUserInfo);

// lista de usuarios
router.get('/users', verifyToken, authController.getAllUsers); // GET /api/auth/users


export default router;
