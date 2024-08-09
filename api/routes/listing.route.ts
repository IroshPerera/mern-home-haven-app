import express from 'express';
import { createListing,deleteListing,updateListing } from '../controller/listing.controller';
import { verifyUser } from '../utils/verifyUser';

const router = express.Router();

router.post('/create',verifyUser, createListing);
router.delete('/delete/:id',verifyUser,deleteListing);
router.post('/update/:id',verifyUser,updateListing);

export default router;