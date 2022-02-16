import React from "react";

const SingleProject = () => {
  return <div>SingleProject</div>;
};

const getStaticPath = () => {
  return {};
};

const getStaticProps = () => {
  //get a single project
  //this always returns a object
  return {
    projed_id: {
      id: 1,
      title: "Bottega Capstone",
      link: "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg",
      published: true,
      description:
        "Bootcamp capstone with react, calling backend api. Dynamically populating items.",
      catagory: "ReactJS",
      imgURL:
        "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg",
    },
  };
};

getStaticProps();

export default SingleProject;
