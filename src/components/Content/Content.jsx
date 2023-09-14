import Container from 'components/Shared/Container/Container';
import { dataOption } from 'data';
import { dataWorks } from 'data';

import styles from './Content.module.scss';

const Content = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>Welcome to our car rental homepage!</h1>
        <h2 className={styles.subtitle}>Car Rental on Your Terms</h2>
        <p className={styles.text}>
          Our company offers a wide selection of rental cars to meet all your
          transportation needs. Whether you need a car for the weekend,
          long-term rental, or a business trip, we're always ready to provide
          the perfect solution.
        </p>
        <h2 className={styles.subtitle}>Why Choose Us?</h2>
        <ul className={styles.list}>
          {dataOption.map(({ title, text }) => (
            <li key={title}>
              <p className={styles.text}>
                <strong>{title}</strong>: {text}
              </p>
            </li>
          ))}
        </ul>
        <h2 className={styles.subtitle}>How It Works</h2>
        <ul className={styles.list}>
          {dataWorks.map(({ title, text }) => (
            <li key={title}>
              <p className={styles.text}>
                <strong>{title}</strong>: {text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.text}>
          No matter where you're headed, we'll make your journey comfortable and
          memorable. Book your car today and hit the road with us!
        </p>
      </Container>
    </section>
  );
};
export default Content;
