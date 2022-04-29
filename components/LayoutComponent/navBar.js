import React, { useState } from "react";
import Link from "next/link";
// import styles from "../../styles/Nav.module.css";
import { faHome, faWrench, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='bg-stone-900 text-white text-3xl flex justify-around relative md:static '>
      <div className='w-52 m-auto cursor-pointer hover:bg-gray-500 hover:'>
        <Link href='/'>
          <img
            src='https://res.cloudinary.com/mackr/image/upload/v1645067949/zgflirliskdxdcldnade.png'
            alt='Logo'
          />
        </Link>
      </div>
      {/* //BURGER BARS */}
      <div className='w-10 m-auto md:invisible cursor-pointer'>
        <FontAwesomeIcon icon={faBars} onClick={(e) => setOpen(!open)} />
      </div>
      {/* BUILD A CONDITIONAL TURNARY OPERATOR 
       THIS WILL CHECK STATE AND IF TRUE THE X ICON WILL SHOW IF FALSE BARS WILL SHOW */}

      <div
        className={`absolute z-10 cursor-pointer w-full top-52 bg-gray-700 py-10 ${
          open ? "left-0" : "left-[-100%] bg-gray-700 "
        } md:static md:bg-transparent md:flex `}>
        <ul className='flex flex-col justify-around items-center md:visible md:flex-row md:m-auto'>
          <li className='p-4 hover:bg-slate-400 rounded-xl'>
            <Link href='/about'>
              <div className='hover:text-gray-800 hover:first-letter:text-gray-700'>
                About <FontAwesomeIcon icon={faWrench} />
              </div>
            </Link>
          </li>
          <li className='p-4 hover:bg-slate-400 rounded-xl'>
            <Link href='/projects'>
              <div className='hover:text-gray-800 hover:first-letter:text-gray-700'>
                Projects <FontAwesomeIcon icon={faWrench} />
              </div>
            </Link>
          </li>
          <li className='p-4 hover:bg-slate-400 rounded-xl'>
            <Link href='/blog'>
              <div className="hover:text-gray-800 hover:first-letter:text-gray-700">
                Blog <FontAwesomeIcon icon={faWrench} />
              </div>
            </Link>
          </li>
        </ul>
        <ul className='flex justify-between px-8 md:flex-col md:p-0 md:mx-20 md:my-auto'>
          <li>
            <Link href='https://twitter.com/home'>
              <div>
                <a target='_blank' className='py-6'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </Link>
          </li>
          <li>
            <Link href='https://facebook.com'>
              <div>
                <a target='_blank' className='py-6'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/mnrskills'>
              <div>
                <a target='_blank'>
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
