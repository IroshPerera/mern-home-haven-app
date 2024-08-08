import express from 'express';
import { signup } from '../controller/auth.controller';
import e from 'express';

const router = express.Router();


router.post('/signup',signup)

export default router;