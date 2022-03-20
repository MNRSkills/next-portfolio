import { filterProps } from "framer-motion";
import Image from "next/image";
import blogStyles from "../../styles/BlogPost.module.css";

const BlogItem = (props) => {

  return (
    <div className={blogStyles.card} >
      <div className={blogStyles.cardDescription}>
      
      </div>
      <div className={blogStyles.imageContainer}>
        <Image src={"https:"+ props.blog.fields.bannerImage.fields.file.url} width="375px" height="268px"/>
        </div>

        <button>Explore</button>
    </div>
  );
};

export default BlogItem;
