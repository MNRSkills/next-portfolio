import React from 'react'
import NewBlogPost from '../../components/Blogs/newBlogForm';
import blogFormStyle from "../../styles/BlogForm.module.css";

const NewBlogPage = () => {

    const addBlogHandler = (enteredBlog) => {
        console.log("THIS IS A NEW POST", enteredBlog)
    }
  return (
    <div className={blogFormStyle.formContainer}><NewBlogPost addBlogPost={addBlogHandler}/></div>
  )
}

export default NewBlogPage;
