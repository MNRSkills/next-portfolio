import { motion } from "framer-motion";
import BlogItem from "./blogItem";
import BlogStyles from "../../styles/ProjectCard.module.css";

const Blogs = (props) => {

  return (
    <div className={BlogStyles.container}>
        {props.blogData.map((blog, index) => {
          return <BlogItem blog={blog} key={index} />;
        })}
    </div>
  );
};

export default Blogs;
