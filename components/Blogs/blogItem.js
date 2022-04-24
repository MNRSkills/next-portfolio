import { filterProps } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import blogStyles from "../../styles/ProjectCard.module.css";

const BlogItem = (props) => {
  console.log(props.blog.fields);
  return (
    <div className={blogStyles.card}>
      <div className={blogStyles.cardDescription}>
        <h1>{props.blog.fields.title}</h1>
        <h2>{props.blog.fields.subtitle}</h2>
      </div>
      <div className={blogStyles.imageContainer}>
        <Image
          src={"https:" + props.blog.fields.bannerImage.fields.file.url}
          width='375px'
          height='268px'
        />
      </div>

      <Link
        href={"../../blog/" + props.blog.fields.slug}
        className={blogStyles.linkbtn}>
        <h6>Check it out</h6>
      </Link>
    </div>
  );
};

export default BlogItem;
