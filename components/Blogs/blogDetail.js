import React from "react";
import slugStyles from "../../styles/BlogDetail.module.css";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const BlogDetail = (props) => {
  const { title, subtitle, bannerImage, blogContent } = props.blogPost.fields;
  return (
    <div>
      <div className={slugStyles.blogCard}>
        <h1>{title}</h1>
        <h6>{subtitle}</h6>
        <Image
          src={"https:" + bannerImage.fields.file.url}
          width={bannerImage.fields.file.details.image.width}
          height={bannerImage.fields.file.details.image.height}
        />
        <div> 
          {documentToReactComponents(blogContent)}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
