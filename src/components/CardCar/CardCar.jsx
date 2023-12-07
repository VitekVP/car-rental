import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

import styles from './CardCars.module.scss';

const CardCar = ({
  car,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
  toggleModal,
}) => {
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

  return (
    <li className={styles.card}>
      <img src={img} alt={make} className={styles.foto} />

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
          <p>
            {make.slice(0, 9)} <span>{model.slice(0, 9)}</span>, {year}
          </p>
        </li>
        <li className={styles.infoItem}>
          <p>{rentalPrice}</p>
        </li>
      </ul>
      <ul className={styles.location}>
        <li className={styles.locationItem}>
          <p>{address.split(' ')[3].replace(',', '')}</p>
        </li>
        <li className={styles.locationItem}>
          <p>{address.split(' ').slice(-1)}</p>
        </li>
        <li className={styles.locationItem}>
          <p>{rentalCompany}</p>
        </li>
      </ul>
      <ul className={styles.description}>
        <li className={styles.descriptionItem}>
          <p>{type}</p>
        </li>
        <li className={styles.descriptionItem}>
          <p>{model}</p>
        </li>
        <li className={styles.descriptionItem}>
          <p>{mileage}</p>
        </li>
        <li className={styles.descriptionItem}>
          <p>{functionalities[0].slice(0, 21)}</p>
        </li>
      </ul>
      <button
        type="button"
        className={styles.btn}
        onClick={() => toggleModal(car)}
      >
        Learn more
      </button>
    </li>
  );
};
export default CardCar;
