import { motion } from "framer-motion";
import About from "../../components/About/about";

import { createClient } from "contentful";

//animate
//initial
//exit

const AboutMe = ({ about_me }) => {
  return (
    <motion.div className='p-20'>
      <About data={about_me} />
    </motion.div>
  );
};

//FETCHING FROM CONTENTFUL
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "author" });
  return {
    props: {
      about_me: res.items,
    },
  };
}

export default AboutMe;
