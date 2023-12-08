import { MongoClient } from "mongodb";

const uri = process.env.DB_URI || "";

const client = new MongoClient(uri);

export const db = client.db("v0_dev_db");
