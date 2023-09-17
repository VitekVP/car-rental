import { Link } from 'react-router-dom';

import Container from 'components/Shared/Container/Container';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>Welcome to MVrent!</h1>
        <h2 className={styles.subtitle}>Car Rental, Your Way!</h2>
        <p className={styles.text}>
          Choose from a wide car selection. Flexible rental terms, no hidden
          fees. Top-notch service, always ready to help.
        </p>
        <ul className={styles.list}>
          <li className={styles.text}>1 - Pick your car.</li>
          <li className={styles.text}>2 - Book online.</li>
          <li className={styles.text}>3 - Get your car.</li>
          <li className={styles.text}>4 - Enjoy your ride.</li>
        </ul>
        <h2 className={styles.subtitle}>Book now and hit the road with us!</h2>
        <Link to="/catalog" className={styles.link}>
          Let's go!!!
        </Link>
      </Container>
    </section>
  );
};
export default HomePage;
