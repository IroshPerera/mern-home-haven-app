import express from 'express';
import { createListing,deleteListing } from '../controller/listing.controller';
import { verifyUser } from '../utils/verifyUser';

const router = express.Router();

router.post('/create',verifyUser, createListing);
router.delete('/delete/:id',verifyUser,deleteListing)

export default router;