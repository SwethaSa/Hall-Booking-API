
import express from 'express';
import { getCustomerBookings } from '../services/customerbookings.service.js';
const router = express.Router();

 router.get("/", async function (request, response){
    const bookings = await getCustomerBookings();
    response.send(bookings);
  });

  export default router;


