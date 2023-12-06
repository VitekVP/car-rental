import { FaViber, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

import styles from './Messengers.module.scss';

const Messengers = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a
          href="https://www.viber.com/ru/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={styles.link}
        >
          <FaViber size={28} className={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://web.telegram.org/a/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={styles.link}
        >
          <FaTelegramPlane size={28} className={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={styles.link}
        >
          <FaWhatsapp size={28} className={styles.icon} />
        </a>
      </li>
    </ul>
  );
};

export default Messengers;
