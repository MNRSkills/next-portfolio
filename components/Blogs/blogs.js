import { motion } from "framer-motion";
import BlogItem from "./blogItem";


const Blogs = (props) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {props.blogData.map((blog, index) => {
          return <BlogItem blog={blog} key={index} />;
        })}
    </div>
  );
};

export default Blogs;
