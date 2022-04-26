import { motion } from "framer-motion";
import NavBar from "./navBar";
import Footer from "./footer";


const Layout = (props) => {
  return (
    <div className="w-full h-full m-0 p-0">
      <NavBar />
      <motion.div
        className="w-full bg-stone-900"
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
