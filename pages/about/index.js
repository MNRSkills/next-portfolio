
import { motion } from "framer-motion";
import About from "../../components/About/about";
import aboutStyles from "../../styles/About.module.css";

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
      profileIMG: "https://res.cloudinary.com/mackr/image/upload/v1643684867/IT-Blog/uuea5uau2hgm7e2fb1ds.jpg",
  },
];

const AboutMe = () => {
  return (
    <motion.div className={aboutStyles.aboutMeIndex}>
      <About data={dummyProfile}/>
    </motion.div>
  );
};

export default AboutMe;
