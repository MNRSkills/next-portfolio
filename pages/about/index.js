import styles from "../../styles/About.module.css";
import { motion } from "framer-motion";
import About from "../../components/About/about";

//animate
//initial
//exit

const dummyProfile = [
  {
    firstName: "Mack",
    lastName: "Ramirez",
    skill: "web development",
    fourLineBio:
      "Working hard every day to achieve my goal of becoming a web developer for a high end company, like yours. Highly motivated, team player, with skills in React Node and Next JS",
      profileIMG: "../../public/images/profilepic.jpeg",
  },
];

const AboutMe = () => {
  return (
    <motion.div>
      <About data={dummyProfile}/>
    </motion.div>
  );
};

export default AboutMe;
