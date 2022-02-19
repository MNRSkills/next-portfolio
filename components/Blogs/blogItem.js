import { filterProps } from "framer-motion";
import blogStyles from "../../styles/BlogPost.module.css";

const BlogItem = (props) => {
  const { title, subTitle, id, category, slug, thumbnail_image } = props.blog;

  const backgroundImage = {
    backgroundImage: "url(" + thumbnail_image + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100%",
  };
  return (
    <div className={blogStyles.card} style={backgroundImage}>
      <div className={blogStyles.cardDescription}>
       <h1>{title}</h1>
       <h6>{subTitle}</h6>
      </div>
    </div>
  );
};

export default BlogItem;
