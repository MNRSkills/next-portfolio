import {useRouter} from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import PostStyles from "../../styles/BlogPost.module.css";

const PostDetail = () => {
  return (
    <motion.div className={PostStyles.postContainer}>
      <h1>This is the PoSt Page in Dynamic form</h1>
      <Link href="/">Home</Link>
    </motion.div>
  );
};


export default PostDetail;