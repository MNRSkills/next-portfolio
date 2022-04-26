import { filterProps } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const BlogItem = (props) => {
  // console.log(props.blog.fields);
  return (
    <div className="bg-gray-400 rounded m-auto">
      <div className="text-gray-300 text-2xl text-center">
        <h1>{props.blog.fields.title}</h1>
        <h2>{props.blog.fields.subtitle}</h2>
      </div>
      <div className="w-full">
        <Image
          src={"https:" + props.blog.fields.bannerImage.fields.file.url}
          width='375px'
          height='268px'
        />
      </div>

      <Link
        href={"../../blog/" + props.blog.fields.slug}
        className="p-20 text-white">
        <h6>Check it out</h6>
      </Link>
    </div>
  );
};

export default BlogItem;
