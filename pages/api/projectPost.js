import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;


    const mngoDB = await MongoClient.connect(
      process.env.MONGO_DB
    );
    const db = mngoDB.db();

    const blogCollection = db.collection("projects");
    const result = await blogCollection.insertOne(data);

    mngoDB.close();

    res.status(201).json({ msg: "this did work" });
  } else {
    console.log("ERROR", res.status(500).json({
      MSG: "ERROR",
    }) )
  }
}
