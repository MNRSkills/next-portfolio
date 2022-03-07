// import { MongoClient } from "mongodb";
import { motion } from "framer-motion";
import { createClient } from "contentful";
import Link from "next/link";
import blogStyles from "../../styles/BlogPost.module.css";

import Blogs from "../../components/Blogs/blogs";

const BlogFetch = (props) => {

  return (
    <motion.div className={blogStyles.postContainer}>
      <Blogs blogData={props.response} />
      <span>
        {/* make this an icon later in the nav */}
        <Link href='/newBlogForm'>New Blog</Link>
      </span>
    </motion.div>
  );
};


export async function getStaticProps() {

  const client = createClient({
    space:process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type: "blogPost"})
  return {
    props: {
      // ProjectData: data,
      response: res.items
    }
  }
}








// export async function getStaticProps() {
//   const clientDB = await MongoClient.connect(process.env.MONGO_DB);
//   const db = clientDB.db();

//   const blogCollection = db.collection("blogItems");

//   const blogPostCollection = await blogCollection.find().toArray();
//   //get the data from the backend
//   clientDB.close();
//   return {
//     props: {
//       blogsData: blogPostCollection.map((blog) => ({
//         title: blog.title,
//         subTitle: blog.subTitle,
//         content: blog.content,
//         thumbnail_image: blog.thumbnail_image,
//         id: blog._id.toString(),
//       })),
//     },
//     revalidate: 1,
//   };
// }

export default BlogFetch;
