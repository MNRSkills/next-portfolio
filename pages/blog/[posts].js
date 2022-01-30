import {useRouter} from "next/router";
import Link from "next/link";
import PostStyles from "../../styles/BlogPost.module.css";

const PostDetail = () => {
  return (
    <div className={PostStyles.postContainer}>
      <h1>This is the PoSt Page in Dynamic form</h1>
      <Link href="/">Home</Link>
    </div>
  );
};


export default PostDetail;