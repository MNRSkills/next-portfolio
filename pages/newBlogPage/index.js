import React from "react";
import NewBlogPost from "../../components/Blogs/newBlogForm";
import blogFormStyle from "../../styles/BlogForm.module.css";

const NewBlogPage = () => {
  const addPostHandler = () => {
    console.log("this is the New post Index", )
  }
  
  return (
    <div className={blogFormStyle.formContainer}>
      <NewBlogPost onAddPost={addPostHandler}/>
    </div>
  );
};

export default NewBlogPage;
