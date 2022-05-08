import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const BlogDetail = (props) => {
  const { title, subtitle, bannerImage, blogContent } = props.blogPost.fields;
  return (
    <motion.div animate={{ opacity: 1 }}>
      <div className='container text-gray-300'>
        <motion.h1
          className=' text-3xl text-center py-5'
          animate={{ fontSize: 50, x: -80, y: -2, opacity: 1, delay: 1 }}>
          {title}
        </motion.h1>
        <motion.h6 className=' text-xl text-center'>{subtitle}</motion.h6>
        <Image
          src={"https:" + bannerImage.fields.file.url}
          width={bannerImage.fields.file.details.image.width}
          height={bannerImage.fields.file.details.image.height}
          className='rouded-xl'
        />
        <div className='py-20'>{documentToReactComponents(blogContent)}</div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
