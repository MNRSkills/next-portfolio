import footerStyles from "../../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.wrapper}>
        <h1 className={footerStyles.logo}>
          <Link href='/'>
            <img
              src='https://res.cloudinary.com/mackr/image/upload/v1645067949/zgflirliskdxdcldnade.png'
              alt='Logo'
            />
          </Link>
        </h1>
        <ul className={footerStyles.iconList}>
          <li>Twitter</li>
          <li>Meta</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
