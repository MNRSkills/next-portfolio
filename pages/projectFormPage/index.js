import React from "react";
import ProjectForm from "../../components/Projects/projectForm";

const ProjectFormPage = () => {
  const addPostHandler = async (e) => {
    try {
      const response = await fetch("/api/blogPost", {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      console.log("RESPONSE FROM THE SERVER", data)
    } catch (error) {
      console.log("THERE WAS AN ERROR", error);
    }
  }
  return <div>This is the project form
    <ProjectForm onAddPost={addPostHandler}/>
  </div>;
};

export default ProjectFormPage;
