import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import blogStyles from "../../styles/BlogPost.module.css";

import Blogs from "../../components/Blogs/blogs";

const DUMMY_DATA = [
  {
    _id: "61d7c539bc934deca56be1fc",
    slug: "something",
    title: "There is something cool",
    subTitle: "Integer tempus feugiat mollis. Aliquam molestie, sem nec ullamcorper fermentum, enim lacus pulvinar est, eget sollicitudin tellus lectus et magna.",
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
    subTitle: "Nunc dictum, enim ut euismod pharetra, felis purus ultrices sem, sit amet pharetra erat purus in nisi. Quisque porttitor lacinia odio, eget auctor justo. ",
    category: ["hardware"],
    tag: "here",
    thumbnail_image:
      "https://res.cloudinary.com/mackr/image/upload/v1615472373/ioys6fphfkfef6rscwf3.jpg",
    __v: 0,
  },
  {
    _id: "61f8a4041dce15579ab3381a",
    slug: "This is just.for the profile pic",
    title: "There is something cool",
    subTitle: "Ut commodo leo et hendrerit tincidunt. Mauris a neque vel magna aliquet ullamcorper. Cras iaculis arcu ligula, ut cursus augue tincidunt vitae. Quisque laoreet eget erat eu efficitur.",
    category: ["software"],
    tag: "here",
    thumbnail_image:
      "https://res.cloudinary.com/mackr/image/upload/v1643684867/IT-Blog/uuea5uau2hgm7e2fb1ds.jpg",
    __v: 0,
  },
  {
    _id: "61f8a4041dce15579ab3381a",
    slug: "This is just.for the profile pic ",
    title: "There is something cool",
    subTitle: "Cras vitae consequat nibh. Phasellus dapibus porta ipsum at sollicitudin. Vivamus lacinia augue eget ante gravida feugiat. Aliquam velit nisl, venenatis ac massa sit amet, imperdiet tempor ante.",
    category: ["software"],
    tag: "here",
    thumbnail_image:
      "https://res.cloudinary.com/mackr/image/upload/v1643684867/IT-Blog/uuea5uau2hgm7e2fb1ds.jpg",
    __v: 0,
  },
  {
    _id: "61f8a4041dce15579ab3381a",
    slug: "This is just.for the profile pic ",
    title: "There is something cool",
    subTitle: "Praesent ac tellus molestie, ullamcorper magna ac, pretium nibh. Aliquam eleifend, lacus id pulvinar pellentesque, neque dolor efficitur dolor, nec scelerisque turpis tellus ac urna. ",
    category: ["software"],
    tag: "here",
    thumbnail_image:
      "https://res.cloudinary.com/mackr/image/upload/v1643684867/IT-Blog/uuea5uau2hgm7e2fb1ds.jpg",
    __v: 0,
  }
];

const PostDetail = (props) => {
  // console.log("THIS IS STill DUMMY DATA", props.blogsData);

  return (
    <motion.div className={blogStyles.postContainer}>
      <Link href='/'>Home</Link>
      <Blogs blogData={props.blogsData} />
    </motion.div>
  );
};

export const getServerSideProps = async () => {
  //get the data from the backend

  return {
    props: {
      blogsData: DUMMY_DATA,
    },
  };
};

getServerSideProps(DUMMY_DATA);
export default PostDetail;
