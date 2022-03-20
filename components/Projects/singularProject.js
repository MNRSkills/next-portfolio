import React from "react";
import Image from "next/image";

const SingularProject = (props) => {
  console.log("FROM SINGULAR", props.project.fields.descriprtion.content);
  const { title, bannerImage, descriprtion, thumbnailUrl, repoUrl } =
    props.project.fields;
  const { details, fileName, url } = thumbnailUrl.fields.file;

  return (
    <div className="single-project-card">
      <h1>{title}</h1>
      <Image src={"https:" + bannerImage.fields.file.url}
        width='200px'
        height='200px'/>
      <div>
        {props.project.fields.descriprtion.content.map((content, index) => {
          return <p key={index}>{content.content[0].value}</p>;
        })}
      </div>
    </div>
  );
};

export default SingularProject;
