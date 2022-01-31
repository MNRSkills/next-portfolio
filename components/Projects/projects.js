import ProjectDetail from "./projectDetail";
import projectStyles from "../../styles/ProjectCard.module.css";

const ProjectsCO = (props) => {


  //THE CLICKHANDLER FOR INDIVIDUAL ITEM GOES HERE
  const itemHandler = () => {
    console.log("THIS HANDLER IS CLICKED");
  };
  return (
    <div className={projectStyles.projectMain}>
      {props.data.map((project, index) => {
        return (
          <ProjectDetail
            project={project}
            key={index}
            itemHandler={itemHandler}
          />
        );
      })}
    </div>
  );
};

export default ProjectsCO;
