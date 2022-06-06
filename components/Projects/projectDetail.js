import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ProjectDetail = (props) => {
  const { title, slug, thumbnailUrl, bannerUrl, repoUrl, siteUrl } =
    props.project.fields;

  return (
    <motion.div
      intial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0, fontSize: 3 }}
      transition={{ delay: 2, type: "spring", stiffness: 120 }}
      className='bg-white m-auto p-10 rounded shadow-2xl'>
      <h1 className='text-center'>{title}</h1>
      <Image
        src={"https:" + thumbnailUrl.fields.file.url}
        width='200px'
        height='200px'
      />
      <Link href={"../../projects/" + slug}>
        <div className='text-2xl font-bold underline text-gray-500 text-center cursor-pointer'>
          Read More
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectDetail;
