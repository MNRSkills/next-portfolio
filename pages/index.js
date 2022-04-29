import { motion } from "framer-motion";

export default function Home() {
  return (
    <div animation={{ x: 100 }} className='homePage h-screen'>
      <div className='container flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col p-5 flex-start text-3xl text-gray-300 h-1/2'>
          <h1 className='text-5xl'>Mack Ramirez</h1>
          <h1 className='text-2xl '>Web Developer</h1>
          <p className='text-base'>
            Do you need a website for your local business? I code responsive
            great looking websites.
          </p>
        </div>
        <div>
          <div className=''></div>
        </div>
      </div>
    </div>
  );
}
