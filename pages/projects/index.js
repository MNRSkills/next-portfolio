import { motion } from "framer-motion";
import Link from "next/link";
import { createClient } from "contentful";
import ProjectsCO from "../../components/Projects/projects";
import ProjectStyles from "../../styles/ProjectCard.module.css";

const data = [
  {
    id: 3,
    title: "Prototype47",
    link: "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg",
    published: true,
    description:
      "Javier Quezada Portfolio website. Fullstack with mongodb, rest api, and crud functionality.",
    catagory: "ReactJS",
    imgURL:
      "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg",
  },
  {
    id: 2,
    title: "Ramirez Trucking",
    link: "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg",
    published: true,
    description:
      "Local trucking business landing page with contact form email funcionality.",
    catagory: "ReactJS",
    imgURL:
      "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg",
  },
  {
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
];

const Projects = (props) => {
  console.log("THISIS FROM PAGE PROJECT", props)
  return (
    <motion.div className={ProjectStyles.postContainer}>
      <ProjectsCO data={props.projectData} />
      <Link href="/projectFormPage">New Project Form</Link>
    </motion.div>
  );
};


export async function getStaticProps() {
  return{
    props: {
      projectData: data
    }
  }
}

// export async function getStaticProps() {

//   const client = createClient({
//     space:process.env.CONTENTFUL_SPACE_ID,
//     accessToken:process.env.CONTENTFUL_ACCESS_KEY
//   })

//   const res = await client.getEntries({ content_type: "blogPost"})
//   return {
//     props: {
//       // ProjectData: data,
//       response: res.items
//     }
//   }
// }


export default Projects;
