import React, {useState} from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import {
  faHome,
  faWrench,
  faCode,
  faCodeCommit,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, faGitHub } from "@fortawesome/react-fontawesome";

const NavBar = () => { 
  const [ menu, setMenu ] = useState(false);
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href='/'>
          <img
            src='https://res.cloudinary.com/mackr/image/upload/v1645067949/zgflirliskdxdcldnade.png'
            alt='Logo'
          />
        </Link>
      </div>
      {/* //BURGER BARS */}
      <div className="hamburger">
        <FontAwesomeIcon icon={faBars}/>
      </div>
      {/* //START OF MENU */}
      <ul className={styles.unorderList}>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/projects'>
            <div>
              Projects <FontAwesomeIcon icon={faWrench} />
            </div>
          </Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
      <ul className={styles.unorderListTwo}>
        <li>
          <Link href='https://twitter.com/home'>
            <div>
              <FontAwesomeIcon icon={faWrench} />
            </div>
          </Link>
        </li>
        <li>
          <Link href='/https://www.facebook.com/'>
            <div>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </Link>
        </li>
        <li>
          <Link href='/github'>
            <div>
              <FontAwesomeIcon icon={faGitHub} />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
