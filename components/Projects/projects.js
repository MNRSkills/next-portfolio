import ProjectDetail from "./projectDetail";

const ProjectsCO = (props) => {


  //THE CLICKHANDLER FOR INDIVIDUAL ITEM GOES HERE
  const itemHandler = (id) => {
  };
  return (
    <div className="project-map grid grid-cols-3 gap-6 py-10">
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
