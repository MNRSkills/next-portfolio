// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

async export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, subTitle, category, tag, thumbnail_image} = data;

    const mngoDB = await MongoClient.connect("")
    const db = mngoDB.db();

    const blogCollection = db.collection("blogItems")
    const result = await blogCollection.insertOne(data);

    mngoDB.close();

    res.status(201).json({ msg: "this did work", })
  } else {

  }
}
