import Container from 'components/Shared/Container/Container';
import Address from 'components/Address/Address';
import Messengers from 'components/Messengers/Messengers';
import Socials from 'components/Socials/Socials';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.info}>
          <Address />
          <Messengers />
          <Socials />
        </div>
        <p className={styles.sign}>
          Developer <span>Viktor Pochynok</span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
