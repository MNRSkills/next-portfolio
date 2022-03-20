import { filterProps } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import blogStyles from "../../styles/BlogPost.module.css";

const BlogItem = (props) => {
// console.log(props.blog.fields.slug)
  return (
    <div className={blogStyles.card} >
      <div className={blogStyles.cardDescription}>
      
      </div>
      <div className={blogStyles.imageContainer}>
        <Image src={"https:"+ props.blog.fields.bannerImage.fields.file.url} width="375px" height="268px"/>
        </div>

        <Link href={"../../blog/" + props.blog.fields.slug}>Check it out</Link>
    </div>
  );
};

export default BlogItem;
