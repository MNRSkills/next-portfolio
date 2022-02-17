import React from "react";

const BlogID = (props) => {
    console.log("Looking at props", props.singleBlog)
  return <div> BlogID</div>;
};

const getStaticProps = async () => {
    // console.log("looking for context", context.params.blogID)
    // const blogID = context.params.blogID;
  return {
    props: {
      singleBlog: {
        _id: blogID,
        slug: "This is just.for the profile pic ",
        title: "There is something cool",
        category: ["software"],
        tag: "here",
        thumbnail_image:
          "https://res.cloudinary.com/mackr/image/upload/v1643684867/IT-Blog/uuea5uau2hgm7e2fb1ds.jpg",
      },
    },
  };
};

// getStaticProps();

export default BlogID;
