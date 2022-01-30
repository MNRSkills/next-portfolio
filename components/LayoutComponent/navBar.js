import Link from "next/link";
import styles from "../../styles/Nav.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.unorderList}>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/blog/posts'>Blog</Link>
        </li>
      </ul>
      <ul className={styles.unorderList}>
          <li>
              <Link href="/facebook">Meta</Link>
          </li>
          <li>
              <Link href="/twitter">Twitter</Link>
          </li>
          <li>
              <Link href="/github">GitHub</Link>
          </li>
      </ul>
    </div>
  );
};

export default NavBar;