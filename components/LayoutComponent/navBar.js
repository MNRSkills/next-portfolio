import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import { faHome, faWrench, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
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
      <div className={styles.hamburger}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {/* //START OF MENU */}
      <ul className={styles.unorderList}>
        <li>
          <Link href='/about'>
            <div>
              About <FontAwesomeIcon icon={faWrench} />
            </div>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <div>
              Projects <FontAwesomeIcon icon={faWrench} />
            </div>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <div>
              Blog <FontAwesomeIcon icon={faWrench} />
            </div>
          </Link>
        </li>
      </ul>
      <ul className={styles.unorderListTwo}>
        {/* <Link href={url}>
  <a target="_blank">Click this link</a>
</Link> */}
        <li>
          <Link href='https://twitter.com/home'>
            <div>
              <a target='_blank' className={styles.socialIcons}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </Link>
        </li>
        <li>
          <Link href='https://facebook.com'>
            <div>
              <a target='_blank' className={styles.socialIcons}>
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
    </nav>
  );
};

export default NavBar;
