import React from "react";
import BlogDetail from "../../components/Blogs/blogDetail";
import slugStyles from "../../styles/BlogDetail.module.css";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("DURING BUILD", params.slug);

  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });
  return {
    props: { blogPost: items[0] },
  };
}

const SingleBlog = (props) => {
  return <div className={slugStyles.container}><BlogDetail blogPost={props.blogPost}/></div>;
};
export default SingleBlog;
