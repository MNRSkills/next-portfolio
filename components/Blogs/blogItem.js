import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = (props) => {
  // console.log(props.blog.fields);
  return (
    <div className='bg-white m-auto p-10 rounded shadow-2xl'>
      <motion.div className='text-center p-2'>
        <h1 className='text-2xl'>{props.blog.fields.title}</h1>
        <h2 className='text-lg'>{props.blog.fields.subtitle}</h2>
      </motion.div>
      <motion.div className='w-full' animate={{ opacity: 1 }}>
        <Image
          src={"https:" + props.blog.fields.bannerImage.fields.file.url}
          width='375px'
          height='268px'
        />
      </motion.div>

      <Link href={"../../blog/" + props.blog.fields.slug}>
        <motion.h6
          className='text-2xl font-bold underline text-gray-500 text-center cursor-pointer'
          animate={{ fontSize: 50 }}>
          Check it out
        </motion.h6>
      </Link>
    </div>
  );
};

export default BlogItem;
