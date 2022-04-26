import { faHome, faWrench, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='container'>
      <div className='p-10'>
        <h1 className='m-auto'>
          <Link href='/'>
            <img
              src='https://res.cloudinary.com/mackr/image/upload/v1645067949/zgflirliskdxdcldnade.png'
              alt='Logo'
            />
          </Link>
        </h1>
      </div>
      <div>
        <ul className='flex flex-col justify-between items-center '>
          <li className='text-gray-300'>
            <Link href='/about'>
              <div>
                About <FontAwesomeIcon icon={faWrench} />
              </div>
            </Link>
          </li>
          <li className='text-gray-300'>
            <Link href='/projects'>
              <div>
                Projects <FontAwesomeIcon icon={faWrench} />
              </div>
            </Link>
          </li>
          <li className='text-gray-300'>
            <Link href='/blog'>
              <div>
                Blog <FontAwesomeIcon icon={faWrench} />
              </div>
            </Link>
          </li>
        </ul>
        <ul className='inline-block items-center text-gray-300'>
          <li>Twitter</li>
          <li>Meta</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
