import { useState, useEffect } from 'react';

import Container from 'components/Shared/Container/Container';

import styles from './FavoritesPage.module.scss';
import CarsList from 'components/CarsList/CarsList';

const FavoritesPage = () => {
  const [favorit, setFavorit] = useState(
    JSON.parse(window.localStorage.getItem('favorites')) ?? []
  );

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorit));
  }, [favorit]);

  const handleChangeFavorites = newFavorites => {
    setFavorit(newFavorites);
  };

  return (
    <section className={styles.wrapper}>
      <Container>
        <CarsList data={favorit} changeFavorit={handleChangeFavorites} />
      </Container>
    </section>
  );
};

export default FavoritesPage;
