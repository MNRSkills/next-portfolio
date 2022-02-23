import React, { useRef } from "react";
import blogFormStyles from "../../styles/BlogForm.module.css";

const NewBlogPost = (props) => {
  console.log("PROPS FROM INDEX", props);
  const titleRef = useRef();
  const subtitleRef = useRef();
  const thumbnail_imageRef = useRef();
  const contentRef = useRef();

  const addBlogHandler = (e) => {
    console.log("THIS IS A NEW POST", e);
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredSubtitle = subtitleRef.current.value;
    const enteredThumbnail = thumbnail_imageRef.current.value;
    const enteredContent = contentRef.current.value;

    const blogObj = {
      title: enteredTitle,
      subTitle: enteredSubtitle,
      thumbnail_image: enteredThumbnail,
      content: enteredContent,
    };

    props.onAddPost(blogObj);
  };

  return (
    <form className={blogFormStyles.formBlock} onSubmit={addBlogHandler}>
      <label className={blogFormStyles.label}>title</label>
      <input type='text' className={blogFormStyles.input} name="title" ref={titleRef} />
      <label className={blogFormStyles.label}>Subtitle</label>
      <input
      className={blogFormStyles.input}
        type='text'
        name="subtitle"
        ref={subtitleRef}
      />
      <label className={blogFormStyles.label}>Thumbnail Image</label>
      <input
      className={blogFormStyles.input}
        type='text'
        name="thumbnail_image"
        ref={thumbnail_imageRef}
      />
      <label className={blogFormStyles.label}>Content</label>
      <input
        className={blogFormStyles.input}
        type='textarea'
        ref={contentRef}
      />
      <button className={blogFormStyles.button} type='submit'>Submit</button>
    </form>
  );
};

export default NewBlogPost;
