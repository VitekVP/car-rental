import { useState, useEffect } from 'react';

import CardCar from 'components/CardCar/CardCar';

import styles from './CarsList.module.scss';

const CarsList = ({ data }) => {
  const [favorit, setFavorit] = useState(
    () => JSON.parse(window.localStorage.getItem('favorites')) ?? []
  );

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorit));
  }, [favorit]);

  const handleAddToFavorites = car => {
    setFavorit(prev => [...prev, car]);
  };

  const handleDeleteFromFavorites = () => {
    setFavorit();
  };

  console.log(favorit);

  return (
    <ul className={styles.list}>
      {data.map(item => (
        <CardCar
          key={item.id}
          car={item}
          addToFavorites={handleAddToFavorites}
        />
      ))}
    </ul>
  );
};
export default CarsList;
