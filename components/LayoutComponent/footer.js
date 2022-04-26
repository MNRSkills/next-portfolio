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
    <div className='bg-stone-900 h-full'>
      <div className='p-10 m-auto md:w-1/4 w-1/2'>
        <h1>
          <Link href='/'>
            <img
              src='https://res.cloudinary.com/mackr/image/upload/v1645067949/zgflirliskdxdcldnade.png'
              alt='Logo'
            />
          </Link>
        </h1>
      </div>
      <div className="container p-20">
        <ul className='flex flex-col justify-between items-center md:flex-row'>
          <li className='text-gray-300 p-10'>
            <Link href='/about'>
              <div>
                About <FontAwesomeIcon icon={faWrench} />
              </div>
            </Link>
          </li>
          <li className='text-gray-300 p-10'>
            <Link href='/projects'>
              <div>
                Projects <FontAwesomeIcon icon={faWrench} />
              </div>
            </Link>
          </li>
          <li className='text-gray-300 p-10'>
            <Link href='/blog'>
              <div>
                Blog <FontAwesomeIcon icon={faWrench} />
              </div>
            </Link>
          </li>
        </ul>
        <ul className='flex justify-between items-center text-gray-300'>
        <li>
            <Link href='https://twitter.com/home'>
              <div>
                <a target='_blank' className='py-6 text-2xl'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </Link>
          </li>
          <li>
            <Link href='https://facebook.com'>
              <div>
                <a target='_blank' className='py-6 text-2xl'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/mnrskills'>
              <div>
                <a target='_blank' className="py-6 text-2xl">
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
