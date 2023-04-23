import express from 'express';
import { bookEvent , unbookEvent , getBookings } from '../controllers/booking.js';

const router = express.Router();


router.post("/:id", bookEvent);
router.put("/:id", unbookEvent);
router.get("/:id", getBookings);

export default router;
