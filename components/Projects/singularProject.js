import React from "react";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const SingularProject = (props) => {
  const { title, bannerImage, descriprtion, thumbnailUrl, repoUrl, siteUrl } =
    props.project.fields;
  const { details, fileName, url } = thumbnailUrl.fields.file;

  return (
    <div className='container'>
      <h1 className='text-center text-white text-2xl py-10'>{title}</h1>
      <Image
        src={"https:" + bannerImage.fields.file.url}
        width={bannerImage.fields.file.details.image.width}
        height={bannerImage.fields.file.details.image.height}
      />
      <div className='text-xl text-gray-300 py-44'>
        {documentToReactComponents(descriprtion)}
      </div>

      <Link href={repoUrl}>
        <a target='_blank'>
          <h1 className='text-4xl text-gray-300 hover:text-white'>Repo URL</h1>
        </a>
      </Link>
      <Link href={siteUrl}>
        <a target='_blank'>
          <h1 className='text-4xl text-gray-300 hover:text-white'>Live Site</h1>
        </a>
      </Link>
    </div>
  );
};

export default SingularProject;
