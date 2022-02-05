import blogStyles from "../../styles/Blog.module.css";

const BlogItem = (props) => {
  console.log(props.blog);
  const { title, id, category, slug, thumbnail_image } = props.blog;
  return (
    <div>
      <div>{title}</div>
      <div className={blogStyles.container}>
        <img
          className={blogStyles.imgWrapper}
          src={thumbnail_image}
          alt='this is a picture'
        />
      </div>
    </div>
  );
};

export default BlogItem;
