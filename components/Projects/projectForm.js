import React, { useRef } from "react";
import projectFormStyles from "../../styles/ProjectForm.module.css";

const ProjectForm = (props) => {
  console.log("PROPS FROM INDEX", props);
  const titleRef = useRef();
  const linkRef = useRef();
  const thumbnail_imageRef = useRef();
  const descriptionRef = useRef();
  const repoRef = useRef();

  const addProjectHandler = (e) => {
    console.log("THIS IS A NEW POST", e);
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredLink = linkRef.current.value;
    const enteredThumbnail = thumbnail_imageRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    //   const enteredRepo = repoRef.current.value;

    const ProjectObj = {
      title: enteredTitle,
      link: enteredLink,
      thumbnail_image: enteredThumbnail,
      description: enteredDescription,
    //   repo = enteredRepo,
    };

    props.onAddPost(ProjectObj);
  };

  return (
    <form className={projectFormStyles.formBlock} onSubmit={addProjectHandler}>
      <label className={projectFormStyles.label}>title</label>
      <input
        type='text'
        className={projectFormStyles.input}
        name='title'
        ref={titleRef}
      />
      <label className={projectFormStyles.label}>Project URL</label>
      <input
        className={projectFormStyles.input}
        type='text'
        name='link'
        ref={linkRef}
      />
      <label className={projectFormStyles.label}>Thumbnail Image</label>
      <input
        className={projectFormStyles.input}
        type='file'
        name='thumbnail_image'
        ref={thumbnail_imageRef}
      />
      <label className={projectFormStyles.label}>GitHub Link</label>
      <input
        className={projectFormStyles.input}
        type='file'
        name='repoRef'
        ref={repoRef}
      />
      <label className={projectFormStyles.label}>Content</label>
      <input
        className={projectFormStyles.input}
        type='textarea'
        ref={descriptionRef}
      />
      <button className={projectFormStyles.button} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default ProjectForm;
