import { useState, useEffect } from 'react';

import Container from 'components/Shared/Container/Container';

import styles from './FavoritesPage.module.scss';
import CarsList from 'components/CarsList/CarsList';
import Plaсeholder from 'components/Plaсeholder/Plaсeholder';

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

  return favorit.length !== 0 ? (
    <section className={styles.wrapper}>
      <Container>
        <CarsList data={favorit} changeFavorit={handleChangeFavorites} />
      </Container>
    </section>
  ) : (
    <Plaсeholder />
  );
};

export default FavoritesPage;
