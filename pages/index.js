import { motion } from "framer-motion";
import HomeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <motion.div animate={{y: 100}} transition={{ ease:"easeOut", duration: 2}}>
      <main className={HomeStyles.home}>
        <h1>Mack Ramirez Ready To Work</h1>
      </main>
    </motion.div>
  );
}
