import blogStyles from "../../styles/BlogPost.module.css";

const BlogItem = (props) => {
  console.log(props.blog);
  const { title, id, category, slug, thumbnail_image } = props.blog;
  return (
    <div className={blogStyles.card}>
      <div>{title}</div>
      <div className="className">
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
