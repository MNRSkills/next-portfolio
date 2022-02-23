import Link from "next/link";
import styles from "../../styles/Nav.module.css";

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
          {/* make this an icon later in the nav */}
          <Link href='/newBlogForm'>New Blog</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
      <ul className={styles.unorderListTwo}>
        <li>
          <Link href='/facebook'>Meta</Link>
        </li>
        <li>
          <Link href='/twitter'>Twitter</Link>
        </li>
        <li>
          <Link href='/github'>GitHub</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
