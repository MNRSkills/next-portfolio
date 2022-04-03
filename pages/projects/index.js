import { motion } from "framer-motion";
import Link from "next/link";
import { createClient } from "contentful";
import ProjectsCO from "../../components/Projects/projects";
import ProjectStyles from "../../styles/ProjectCard.module.css";



const Projects = (props) => {
  return (
    <motion.div className={ProjectStyles.postContainer}>
      <ProjectsCO data={props.response} />
      <Link href="/projectFormPage">New Project Form</Link>
    </motion.div>
  );
};



//FETCHING FUNCTION
export async function getStaticProps() {

  const client = createClient({
    space:process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type:"projects"})
  return {
    props: {
      // ProjectData: data,
      response: res.items
    }
  }
}


export default Projects;
