import Container from 'components/Shared/Container/Container';

import styles from './Content.module.scss';

const Content = () => {
  const dataOption = [
    {
      title: 'Variety of Cars',
      text: 'We have cars of different classes and brands for you to choose from, ensuring you find a car that suits your style and budget.',
    },
    {
      title: 'Flexible Rental Terms',
      text: 'We offer flexible rental periods, from a few hours to several months, to accommodate your needs.',
    },
    {
      title: 'Transparent Pricing',
      text: 'o hidden fees. You will always know the exact cost of your rental.',
    },
    {
      title: 'High-Level Service',
      text: 'Our customers appreciate our responsiveness and willingness to assist at any time.',
    },
  ];

  const dataWorks = [
    {
      title: 'Select Your Car',
      text: 'Browse our car catalog and choose the one that suits you.',
    },
    {
      title: 'Book Online',
      text: 'Reserve your car online at your convenience.',
    },
    {
      title: 'Get Your Car',
      text: 'Visit our office or wait for your car to be delivered.',
    },
    {
      title: 'Enjoy Your Ride',
      text: 'Enjoy the freedom of travel in your rental car.',
    },
  ];

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
