import CardCar from 'components/CardCar/CardCar';

import styles from './CarsList.module.scss';

const CarsList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map(item => (
        <CardCar key={item.id} car={item} />
      ))}
    </ul>
  );
};
export default CarsList;
