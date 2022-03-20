import React from "react";
import slugStyle from "../../styles/ProjectSlug.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const SingularProject = (props) => {
  console.log("FROM SINGULAR", props.project.fields);
  const { title, bannerImage, descriprtion, thumbnailUrl, repoUrl } =
    props.project.fields;
  const { details, fileName, url } = thumbnailUrl.fields.file;

  return (
    <div className={slugStyle.singleProjectCard}>
      <h1>{title}</h1>
      <Image
        src={"https:" + bannerImage.fields.file.url}
        width={bannerImage.fields.file.details.image.width}
        height={bannerImage.fields.file.details.image.height}
      />
      <div>
        {documentToReactComponents(descriprtion)}
      </div>
    </div>
  );
};

export default SingularProject;
