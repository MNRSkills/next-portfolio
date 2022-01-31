import { motion } from "framer-motion";
import Link from "next/link";
import projectStyles from "../../styles/ProjectCard.module.css";

const ProjectDetail = (props) => {
  console.log("LOOKING FOR PROPS", props.project);

  const { id, title, description, category, link, imgURL } = props.project;

  const selectID = (id) => {
    props.itemHandler();
  };
  return (
    <div className={projectStyles.card}>
      <div className='card-title'>
        <h1>{title}</h1>
      </div>
      <div className={projectStyles.cardImage}>
        <img src={imgURL} alt='picture' />
      </div>
      <div className={projectStyles.cardBttm}>
          <h3>{description}</h3>
        <button onClick={(id) => selectID(id)}>See More</button>
      </div>
    </div>
  );
};

export default ProjectDetail;
