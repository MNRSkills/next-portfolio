import React from "react";
import blogFormStyles from "../../styles/BlogForm.module.css";

const NewBlogPost = (props) => {
    console.log("THIS IS PROPS FROM NEW BLOG", props)
  return (
      <form className={blogFormStyles.formBlock} >
        <label className={blogFormStyles.label}>title</label>
        <input type='text' placeholder='Title' name='title' />
        <label className={blogFormStyles.label}>Subtitle</label>
        <input type='text' placeholder='Subtitle' name='subTitle' />
        <label className={blogFormStyles.label}>Thumbnail Image</label>
        <input
          type='text'
          placeholder='Thumbnail Image'
          name='thumbnail_image'
        />
        <label className={blogFormStyles.label}>Content</label>
        <input
          type='textarea'
          placeholder='What is on your mind'
          name='content'
        />
      </form>
  );
};

export default NewBlogPost;
