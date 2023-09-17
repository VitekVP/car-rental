import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

import styles from './CardCars.module.scss';

const CardCar = ({ car, addToFavorites, removeFromFavorites, isFavorite }) => {
  const {
    id,
    make,
    model,
    img,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = car;

  console.log(isFavorite);

  return (
    <li className={styles.card}>
      <div className={styles.thumb}>
        <img src={img} alt={make} />
      </div>
      {isFavorite ? (
        <AiFillHeart
          className={styles.iconRemove}
          onClick={() => removeFromFavorites(id)}
        />
      ) : (
        <AiOutlineHeart
          className={styles.iconAdd}
          onClick={() => addToFavorites(car)}
        />
      )}

      <ul className={styles.info}>
        <li className={styles.infoItem}>
          {make.slice(0, 9)} <span>{model.slice(0, 9)}</span>, {year}
        </li>
        <li className={styles.infoItem}>{rentalPrice}</li>
      </ul>
      <ul className={styles.location}>
        <li className={styles.locationItem}>
          {address.split(' ')[3].replace(',', '')}
        </li>
        <li className={styles.locationItem}>{address.split(' ').slice(-1)}</li>
        <li className={styles.locationItem}>{rentalCompany}</li>
      </ul>
      <ul className={styles.description}>
        <li className={styles.descriptionItem}>{type}</li>
        <li className={styles.descriptionItem}>{model}</li>
        <li className={styles.descriptionItem}>{mileage}</li>
        <li className={styles.descriptionItem}>
          {functionalities[0].slice(0, 21)}
        </li>
      </ul>
      <button type="button" className={styles.btn}>
        Learn more
      </button>
    </li>
  );
};
export default CardCar;
