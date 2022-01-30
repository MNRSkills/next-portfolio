import ProjectDetail from "./projectDetail";

const ProjectsCO = (props) => {


  //THE CLICKHANDLER FOR INDIVIDUAL ITEM GOES HERE
  const itemHandler = () => {
    console.log("THIS HANDLER IS CLICKED");
  };
  return (
    <div>
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
