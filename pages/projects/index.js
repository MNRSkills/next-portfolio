import { motion } from "framer-motion";
import Link from "next/link";
import { createClient } from "contentful";
import ProjectsCO from "../../components/Projects/projects";

const Projects = (props) => {
  return (
    <motion.div>
      <ProjectsCO data={props.response} />
    </motion.div>
  );
};

//FETCHING FUNCTION
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "projects" });
  return {
    props: {
      // ProjectData: data,
      response: res.items,
    },
  };
}

export default Projects;
