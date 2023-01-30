import { client } from '../index.js';


export async function getRooms() {
    return await client.db("hall").collection("rooms").find({}).toArray();
}
export async function createRooms(data) {
    return await client.db("hall").collection("rooms").insertOne(data);
}
