import { Link } from 'react-router-dom';

import Container from 'components/Shared/Container/Container';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const dataСonditions = [
    { text: 'wide selection of cars' },
    { text: 'flexible rental terms' },
    { text: 'transparent conditions' },
    { text: 'top-notch service' },
  ];

  const dataActions = [
    { text: 'Pick your car' },
    { text: 'Make a reservation' },
    { text: 'Get your car' },
    { text: 'Enjoy your ride' },
  ];

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.boxContainer}>
          <h1 className={styles.title}>MVrent - сar rental</h1>
          <div className={styles.boxLeft}>
            <h2 className={styles.subtitle}>We offer:</h2>
            <ul>
              {dataСonditions.map(({ text }) => (
                <li key={text} className={styles.listItem}>
                  <p className={styles.text}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.boxRight}>
            <h2 className={styles.subtitle}>It's simple:</h2>
            <ul className={styles.list}>
              {dataActions.map(({ text }) => (
                <li key={text} className={styles.listItem}>
                  <p className={styles.text}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/catalog" className={styles.link}>
            Select car!!!
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default HomePage;
