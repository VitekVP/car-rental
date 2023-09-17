import { useState, useEffect } from 'react';

import CardCar from 'components/CardCar/CardCar';

import styles from './CarsList.module.scss';

const CarsList = ({ data, changeFavorit }) => {
  const [favorit, setFavorit] = useState(
    JSON.parse(window.localStorage.getItem('favorites')) ?? []
  );

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorit));
  }, [favorit]);

  const handleAddToFavorites = car => {
    setFavorit(prev => [...prev, car]);
  };

  const handleIsFavorites = id => favorit.some(item => item.id === id);

  const handleDeleteFromFavorites = id => {
    setFavorit(prev => prev.filter(item => item.id !== id));
    const newFavorites = favorit.filter(item => item.id !== id);
    changeFavorit(newFavorites);
  };

  console.log(favorit);

  return (
    <ul className={styles.list}>
      {data.map(item => (
        <CardCar
          key={item.id}
          car={item}
          addToFavorites={handleAddToFavorites}
          removeFromFavorites={handleDeleteFromFavorites}
          isFavorite={handleIsFavorites(item.id)}
        />
      ))}
    </ul>
  );
};
export default CarsList;
