import { MongoClient } from 'mongodb';

export default async(str) => {
    const client = new MongoClient("mongodb+srv://LCM:Q0hKRsbvR3fBcwIO@sovidi.v53i9gi.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db("petsalon");
    const collection = db.collection(str);
    console.log("mongodb 접속성공");

    return {client, collection};
}