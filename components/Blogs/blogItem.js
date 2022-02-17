import blogStyles from "../../styles/BlogPost.module.css";

const BlogItem = (props) => {
  const { title, id, category, slug, thumbnail_image } = props.blog;
  return (
    <div className={blogStyles.card}>
      <div className={blogStyles.cardIMGBOX}>
        <div className={blogStyles.cardText}>{title}</div>
        <img
          className={blogStyles.cardIMG}
          src={thumbnail_image}
          alt='this is a picture'
        />
      </div>
    </div>
  );
};

export default BlogItem;
