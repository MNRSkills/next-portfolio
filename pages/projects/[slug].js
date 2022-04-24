import React from "react";
import SingularProject from "../../components/Projects/singularProject";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {

  const res = await client.getEntries({
    content_type: "projects",
  });

  const paths = res.items.map(item => {
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
  // console.log("DURING BUILD", params.slug)
 
  const { items } = await client.getEntries({
    content_type: "projects",
    "fields.slug": params.slug,
  });
  return {
    props: { project: items[0] },
  };
}

const SingleProject = (props) => {
  console.log("SINGLE PAGE RENDERED", props.project.fields.title);
  return <div className="container"><SingularProject project={props.project}/></div>;
};

export default SingleProject;
