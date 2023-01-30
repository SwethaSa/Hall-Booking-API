


import express from 'express';
import { allBookings } from '../services/bookings.service.js';
const router = express.Router();

router.get("/", async function (request, response){
    const bookings = await allBookings();
    response.send(bookings);
  });
  
export default router;

