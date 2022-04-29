import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const BlogDetail = (props) => {
  const { title, subtitle, bannerImage, blogContent } = props.blogPost.fields;
  return (
    <div>
      <div className='container text-gray-300'>
        <h1 className=' text-3xl text-center'>{title}</h1>
        <h6 className=' text-xl text-center'>{subtitle}</h6>
        <Image
          src={"https:" + bannerImage.fields.file.url}
          width={bannerImage.fields.file.details.image.width}
          height={bannerImage.fields.file.details.image.height}
          className='rouded-xl'
        />
        <div className="py-20">{documentToReactComponents(blogContent)}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
