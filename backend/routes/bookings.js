// import express from 'express';
// import { bookEvent , unbookEvent , getBookings } from '../controllers/booking.js';

// const router = express.Router();


// router.post("/:id", bookEvent);
// router.put("/:id", unbookEvent);
// router.get("/:id", getBookings);

// export default router;



import express from 'express';
import {  getBookings , bookEvent , unbookEvent  } from '../controllers/booking.js';

const router = express.Router();

router.get("/", getBookings);
router.post("/", bookEvent);
router.delete("/", unbookEvent);


export default router;
