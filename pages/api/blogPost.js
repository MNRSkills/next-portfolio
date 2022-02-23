// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  console.log("did something happen here", process.env.MONGO_DB)
  if (req.method === "POST") {
    const data = req.body;


    const mngoDB = await MongoClient.connect(
      ""
    );
    const db = mngoDB.db();

    const blogCollection = db.collection("blogItems");
    const result = await blogCollection.insertOne(data);

    mngoDB.close();

    res.status(201).json({ msg: "this did work" });
  } else {
    console.log("ERROR", res.status(500).json({
      MSG: "ERROR",
    }) )
  }
}
