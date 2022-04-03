import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import {
  faHome,
  faWrench,
  faCode,
  faCodeCommit,
  faGitHub
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
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
      <ul className={styles.unorderList}>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faWrench}/>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
      <ul className={styles.unorderListTwo}>
        <li>
          <Link href='/facebook'>
            <FontAwesomeIcon icon={faWrench} />
          </Link>
        </li>
        <li>
          <Link href='/twitter'>
            <FontAwesomeIcon icon={faCode} />
          </Link>
        </li>
        <li>
          <Link href='/github'>
            <FontAwesomeIcon icon={faGitHub} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
