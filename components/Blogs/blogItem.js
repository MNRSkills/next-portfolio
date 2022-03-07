import { filterProps } from "framer-motion";
import Image from "next/image";
import blogStyles from "../../styles/BlogPost.module.css";

const BlogItem = (props) => {
  console.log(props.blog)
  console.log("THE BANNER IMAGE", props.blog.fields.bannerImage.fields.file.url)
  // const { title, subTitle, id, category, slug, thumbnail_image } = props.blog;

  // const backgroundImage = {
  //   backgroundImage: "url(" + thumbnail_image + ")",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center center",
  //   width: "100%",
  // };
  return (
    <div className={blogStyles.card} >
      <div className={blogStyles.cardDescription}>
      
      </div>
      <div className={blogStyles.imageContainer}>
        <Image src={"https:"+ props.blog.fields.bannerImage.fields.file.url} width="375px" height="268px"/>
        </div>
    </div>
  );
};

export default BlogItem;
