

import express from 'express';
import { checkRooms, bookRooms } from '../services/book.service.js';
const router = express.Router();

router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);

    const roomBooking = await checkRooms(data);

    if (roomBooking) {
        return response.status(400).send({ error: "Room already booked for the same time and date." });
    }

    const bookings = await bookRooms(data);
    response.send(bookings);
});

export default router;

