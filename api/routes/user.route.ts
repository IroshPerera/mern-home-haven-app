
import express from 'express';
import { test, updateUser,deleteUser , getUserListing,getUser} from '../controller/user.controller';
import { verifyUser } from '../utils/verifyUser';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyUser, updateUser);
router.delete('/delete/:id',verifyUser, deleteUser);
router.get('/listing/:id',verifyUser, getUserListing);
router.get('/:id', verifyUser, getUser)


export default router;