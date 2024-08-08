
import express from 'express';
import { test, updateUser } from '../controller/user.controller';
import { verifyUser } from '../utils/verifyUser';


const router = express.Router();

router.get('/test', test);
router.get('/update/:id',verifyUser, updateUser);

export default router;