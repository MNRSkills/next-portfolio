import { motion } from "framer-motion";


export default function Home() {
  return (
    <div animation={{x: 100}} className="homePage h-screen">
      <div className="flex flex-col justify-center w-full h-full">
        <div className="flex flex-col p-5 flex-start text-3xl text-gray-300 h-1/2">
          <h1 className="text-5xl ">Web Developer</h1>
          <h1>Mack Ramirez</h1>
          <p className="text-base">Do you need a website for your local business? I code responsive great looking websites.</p>
        </div>
        <div>
          <div className="bg-gray-200 h-40">
            
          </div>
        </div>
      </div>
      
    </div>
  );
}
