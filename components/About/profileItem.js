import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { motion } from "framer-motion";

const ProfileItem = (props) => {
  const { firstName, lastName, backgroundImage, shortBio } =
    props.profile.fields;
  return (
    <div className='w-full h-full '>
      <div className='text-gray-300 m-auto'>
        <motion.h1
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: -2 }}
          transition={{ delay: 2, duration: 1.5 }}
          className='hover:text-red-300 text-3xl'>
          {firstName}
        </motion.h1>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 2, opacity: 1, fontSize: 50 }}
          transiton={{ delay: 1.5, duration: 2 }}>
          {lastName}
        </motion.h1>
      </div>
      <motion.div
        className='w-full p-4 md:w-1/2 md:py-5 m-auto'
        initial={{ x: -700 }}
        animate={{ rotate: 360, x: 2 }}
        transition={{ duration: 2 }}>
        <Image
          src={"https:" + backgroundImage.fields.file.url}
          width={backgroundImage.fields.file.details.image.width}
          height={backgroundImage.fields.file.details.image.height}
        />
      </motion.div>
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ ease: "easeIn", delay: 1.5, duration: 1.5 }}
        className='text-lg text-gray-300 m-auto overflow-hidden md:w-1/2'>
        {documentToReactComponents(shortBio)}
      </motion.div>
    </div>
  );
};

export default ProfileItem;
