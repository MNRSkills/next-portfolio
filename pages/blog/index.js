import { MongoClient } from "mongodb";
import { motion } from "framer-motion";
import Link from "next/link";
import blogStyles from "../../styles/BlogPost.module.css";

import Blogs from "../../components/Blogs/blogs";



const PostDetail = (props) => {
  console.log("THIS IS STill DUMMY DATA", props.blogsData);

  return (
    <motion.div className={blogStyles.postContainer}>
      <Blogs blogData={props.blogsData} />
    </motion.div>
  );
};

export async function getStaticProps() {
  const clientDB = await MongoClient.connect(
   process.env.MONGO_DB

  );
  const db = clientDB.db();

  const blogCollection = db.collection("blogItems");

  const blogPostCollection = await blogCollection.find().toArray();
  //get the data from the backend
  clientDB.close();
  return {
    props: {
      blogsData: blogPostCollection.map((blog) => ({
        title: blog.title,
        subTitle: blog.subTitle,
        content: blog.content,
        thumbnail_image: blog.thumbnail_image,
        id: blog._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default PostDetail;
