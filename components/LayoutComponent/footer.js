import footerStyles from "../../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={footerStyles.container}>
            <div className={footerStyles.wrapper}>
            <h1 className={footerStyles.logo}>LOGO</h1>
            <ul className={footerStyles.iconList}>
                <li>Twitter</li>
                <li>Meta</li>
                <li>GitHub</li>
            </ul>

            </div>

        </div>
    )
}

export default Footer;