import { motion } from "framer-motion";
import HomeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <motion.div className={HomeStyles.container}>
      <main className={HomeStyles.home}>
        <h1>Mack Ramirez Ready To Work For You</h1>
        <motion.div className={HomeStyles.underline} animation={{x: 100}}></motion.div>
      </main>
    </motion.div>
  );
}
