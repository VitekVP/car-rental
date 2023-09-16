import { useState } from 'react';

import Container from 'components/Shared/Container/Container';
import CardCar from 'components/CardCar/CardCar';

import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const [favorit] = useState(
    () => JSON.parse(window.localStorage.getItem('favorites')) ?? []
  );

  return (
    <section className={styles.wrapper}>
      <Container>
        <ul className={styles.list}>
          {favorit.map(item => (
            <CardCar key={item.id} car={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default FavoritesPage;
