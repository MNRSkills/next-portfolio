import { motion } from "framer-motion";
import NavBar from "./navBar";
import Footer from "./footer";
import LayoutStyles from "../../styles/Layout.module.css";

const Layout = (props) => {
  return (
    <div className={LayoutStyles.container}>
      <NavBar />
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
        {props.children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
