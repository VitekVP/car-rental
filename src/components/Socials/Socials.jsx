import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

import styles from './Socials.module.scss';

const Socials = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a
          href="https://uk-ua.facebook.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={styles.link}
        >
          <FaFacebookF size={28} className={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={styles.link}
        >
          <FaInstagram size={28} className={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/?lang=ru"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={styles.link}
        >
          <FaTwitter size={28} className={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/home"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={styles.link}
        >
          <FaLinkedinIn size={28} className={styles.icon} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
