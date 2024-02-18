import db from "../db";

export async function GET() {
    const {client, collection} = await db("member");
    const data = await collection.find().toArray();

    await client.close();
    return Response.json(data);
}