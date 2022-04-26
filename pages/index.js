import { motion } from "framer-motion";


export default function Home() {
  return (
    <motion.div className="homePage h-screen">
      <main className="homepage-main container text-white text-3xl">
        <h1>Mack Ramirez Ready To Work For You</h1>
        <motion.div className="animated home-div" animation={{x: 100}}></motion.div>
      </main>
    </motion.div>
  );
}
