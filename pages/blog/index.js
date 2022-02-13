import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import PostStyles from "../../styles/BlogPost.module.css";

import Blogs from "../../components/Blogs/blogs";

const DUMMY_DATA = [
  {
    _id: "61d7c539bc934deca56be1fc",
    slug: "something",
    title: "There is something cool",
    category: ["hardware"],
    tag: "here",
    thumbnail_image:
      "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg",
    __v: 0,
  },
  {
    _id: "61dd238b2d45b69b35331761",
    slug: "somet",
    title: "this is the new tiitle",
    category: ["hardware"],
    tag: "here",
    thumbnail_image:
      "https://res.cloudinary.com/mackr/image/upload/v1641882506/IT-Blog/srjrbowbovmtedo18zbn.jpg",
    __v: 0,
  },
  {
    _id: "61f8a4041dce15579ab3381a",
    slug: "This is just.for the profile pic ",
    title: "There is something cool",
    category: ["software"],
    tag: "here",
    thumbnail_image:
      "https://res.cloudinary.com/mackr/image/upload/v1643684867/IT-Blog/uuea5uau2hgm7e2fb1ds.jpg",
    __v: 0,
  },
];

const PostDetail = (props) => {
  // console.log("THIS IS STill DUMMY DATA", props.blogsData);

  return (
    <motion.div className={PostStyles.postContainer}>
      <Link href='/'>Home</Link>
      <Blogs blogData={props.blogsData} />
    </motion.div>
  );
};

export const getServerSideProps = async () => {
  //get the data from the backend
  // const res = fetch("http://localhost:8080/blogs");

  return {
    props: {
      blogsData: DUMMY_DATA,
    },
  };
};

getServerSideProps(DUMMY_DATA);
export default PostDetail;
