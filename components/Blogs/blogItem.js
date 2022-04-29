import { filterProps } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const BlogItem = (props) => {
  // console.log(props.blog.fields);
  return (
    <div className="bg-white m-auto p-10 rounded shadow-2xl">
      <div className=" text-2xl text-center p-2">
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
        href={"../../blog/" + props.blog.fields.slug}>
        <h6 className="text-2xl font-bold underline text-gray-500 text-center cursor-pointer">Check it out</h6>
      </Link>
    </div>
  );
};

export default BlogItem;
