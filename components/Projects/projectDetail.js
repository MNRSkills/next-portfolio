import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import projectStyles from "../../styles/ProjectCard.module.css";

const ProjectDetail = (props) => {
  console.log("LOOKING FOR PROPS", props);

  // const { id, title, description, category, link, bannerImage } = props.project.fields
  // const bannerIMG = bannerImage.fields.file.url;
  // console.log("The Data from contentful", bannerIMG)

  // const selectID = (id) => {
  //   console.log("WHAT IS HEADING BACK", id)
  //   props.itemHandler(id);
  // };
  return (
    <div className={projectStyles.card}>
      {/* <div className='card-title'>
        <h1>{title}</h1>
      </div>
      <div className={projectStyles.cardImage}>
       <Image src={'https:' + bannerIMG} width="500px" height="400px"/>
      </div>
      <div className={projectStyles.cardBttm}>
          <h3>{description}</h3>
        <button onClick={(id) => selectID(id)}>See More</button>
      </div> */}
    </div>
  );
};

export default ProjectDetail;
