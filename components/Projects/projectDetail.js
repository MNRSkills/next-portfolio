import { motion } from "framer-motion";
import Link from "next/link";

const ProjectDetail = (props) => {
  console.log("LOOKING FOR PROPS", props.project);

  const { id, title, skill, category, link, imgURL } = props.project;

  const selectID = (id) => {
      props.itemHandler();
  }
  return (
    <div className="card-layout">
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="card-img"><img src={imgURL} alt="picture"/></div>
      <div className="card-bttm">
          <button onClick={(id)=> selectID(id)}>
             See More
          </button>

      </div>
      
    </div>
  );
};

export default ProjectDetail;
