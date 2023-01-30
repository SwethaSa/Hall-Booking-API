

import express from 'express';
import { createRooms, getRooms } from '../services/rooms.service.js';
const router = express.Router();

router.post("/", async function (request, response){

    const data = request.body;
console.log(data);
       const rooms = await createRooms(data);
       response.send(rooms);
    })

    router.get("/", async function (request, response){

        const rooms = await getRooms();
        response.send(rooms);
    })

    export default router;

