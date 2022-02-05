import { motion } from "framer-motion";
import BlogItem from "./blogItem";

const Blogs = (props) => {
  console.log(props.blogData);

  return (
    <div>
      <div>
        {props.blogData.map((blog, index) => {
          return <BlogItem blog={blog} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
