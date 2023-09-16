import styles from './CardCars.module.scss';

const CardCar = ({ car }) => {
  const { make, img } = car;

  return (
    <li className={styles.card}>
      <div className={styles.thumb}>
        <img src={img} alt={make} />
      </div>
      <div className={styles.info}></div>
      <div className={styles.description}></div>
      <button type="button" className={styles.btn}>
        Learn more
      </button>
    </li>
  );
};
export default CardCar;
