import {useRouter} from "next/router";
import Link from "next/link";

const PostDetail = () => {
  return (
    <div>
      <h1>This is the PoSt Page in Dynamic form</h1>
      <Link href="/">Home</Link>
    </div>
  );
};


export default PostDetail;