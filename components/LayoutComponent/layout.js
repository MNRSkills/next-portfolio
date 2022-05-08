import { motion } from "framer-motion";
import NavBar from "./navBar";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div className='w-full h-auto m-0 p-0 overflow-hidden'>
      <NavBar />
      <motion.div
        className='w-auto bg-stone-900'
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        {props.children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
