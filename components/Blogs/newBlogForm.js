import React from "react";
import blogFormStyles from "../../styles/BlogForm.module.css";

const NewBlogPost = (props) => {
    console.log("PROPS FROM INDEX", props);
  const addBlogHandler = (e) => {
    console.log("THIS IS A NEW POST", e);
    props.onAddPost(e);
    e.preventDefault();
  };

  return (
    <form className={blogFormStyles.formBlock} onSubmit={addBlogHandler}>
      <label className={blogFormStyles.label}>title</label>
      <input
        type='text'
        placeholder='Title'
        name='title'
      />
      <label className={blogFormStyles.label}>Subtitle</label>
      <input
        type='text'
        placeholder='Subtitle'
        name='subTitle'
      />
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
      <button type='submit'>Submit</button>
    </form>
  );
};

export default NewBlogPost;
