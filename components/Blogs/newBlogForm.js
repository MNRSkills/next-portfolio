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
      <input type='text' placeholder='Title' name='title' ref={titleRef} />
      <label className={blogFormStyles.label}>Subtitle</label>
      <input
        type='text'
        placeholder='Subtitle'
        name='subTitle'
        ref={subtitleRef}
      />
      <label className={blogFormStyles.label}>Thumbnail Image</label>
      <input
        type='text'
        placeholder='Thumbnail Image'
        name='thumbnail_image'
        ref={thumbnail_imageRef}
      />
      <label className={blogFormStyles.label}>Content</label>
      <input
        type='textarea'
        placeholder='What is on your mind'
        name='content'
        ref={contentRef}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default NewBlogPost;
