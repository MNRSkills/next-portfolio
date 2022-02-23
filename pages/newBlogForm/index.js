import React from "react";
import NewBlogPost from "../../components/Blogs/newBlogForm";
import blogFormStyle from "../../styles/BlogForm.module.css";

const NewBlogPage = () => {
  const addPostHandler = async (e) => {
    try {
      const response = await fetch("/api/blogPost", {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      console.log("RESPONSE FROM THE SERVER", data)
    } catch (error) {
      console.log("THERE WAS AN ERROR", error);
    }
  }
  
  return (
    <div className={blogFormStyle.formContainer}>
      <NewBlogPost onAddPost={addPostHandler}/>
    </div>
  );
};

export default NewBlogPage;
