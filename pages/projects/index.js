import { motion } from "framer-motion";
import ProjectsCO from "../../components/Projects/projects";

const Projects = () => {
  const data = [
    {
      id: 3,
      title: "Prototype47",
      link: "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg",
      published: true,
      skill: "medium",
      catagory: "ReactJS",
      imgURL: "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg"
    },
    {
      id: 2,
      title: "Ramirez Trucking",
      link: "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg",
      published: true,
      skill: "medium",
      catagory: "ReactJS",
      imgURL: "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg"
    },
    {
      id: 1,
      title: "Bottega Capstone",
      link: "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg",
      published: true,
      skill: "medium",
      catagory: "ReactJS",
      imgURL: "https://res.cloudinary.com/mackr/image/upload/v1641530681/IT-Blog/r1lmkwk9qz4ou185uaav.jpg"
    },
  ];

  return (
    <motion.div>
      <ProjectsCO data={data} />
    </motion.div>
  );
};

export default Projects;
