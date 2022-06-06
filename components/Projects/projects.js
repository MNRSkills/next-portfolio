import ProjectDetail from "./projectDetail";
import { motion } from "framer-motion";

const ProjectsCO = (props) => {
  //THE CLICKHANDLER FOR INDIVIDUAL ITEM GOES HERE
  return (
    <motion.div className='project-map grid grid-cols-1 md:grid-cols-3 gap-6 py-10'>
      {props.data.map((project, index) => {
        return <ProjectDetail project={project} key={index} />;
      })}
    </motion.div>
  );
};

export default ProjectsCO;
