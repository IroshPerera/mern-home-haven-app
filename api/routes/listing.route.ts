import express from 'express';
import { createListing,deleteListing,updateListing,getListing } from '../controller/listing.controller';
import { verifyUser } from '../utils/verifyUser';

const router = express.Router();

router.post('/create',verifyUser, createListing);
router.delete('/delete/:id',verifyUser,deleteListing);
router.post('/update/:id',verifyUser,updateListing);
router.get('/get/:id',getListing);
export default router;