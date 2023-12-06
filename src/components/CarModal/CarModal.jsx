import { AiOutlineClose } from 'react-icons/ai';

import styles from './CarModal.module.scss';

const CarModal = ({ car, toggleModal }) => {
  const {
    id,
    make,
    model,
    img,
    year,
    rentalPrice,
    address,
    type,
    mileage,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = car;

  return (
    <div className={styles.wrapper}>
      <AiOutlineClose className={styles.iconClose} onClick={toggleModal} />
      <img
        src={img}
        alt={make}
        width="461"
        height="248"
        className={styles.foto}
      />

      <h3 className={styles.info}>
        {make} <span>{model}</span>, {year}
      </h3>
      <ul className={styles.location}>
        <li className={styles.locationItem}>
          <p>{address.split(' ')[3].replace(',', '')}</p>
        </li>
        <li className={styles.locationItem}>
          <p>{address.split(' ').slice(-1)}</p>
        </li>
        <li className={styles.locationItem}>
          <p>Id:{id}</p>
        </li>
        <li className={styles.locationItem}>
          <p>Year:{year}</p>
        </li>
        <li className={styles.locationItem}>
          {' '}
          <p>Tipe:{type}</p>
        </li>
      </ul>
      <ul className={styles.feature}>
        <li className={styles.featureItem}>
          <p>FuelConsumption:{fuelConsumption}</p>
        </li>
        <li className={styles.featureItem}>
          <p>EngineSize:{engineSize}</p>
        </li>
      </ul>
      <p className={styles.description}>{description}</p>
      {/* <p className={styles.description}>{description.slice(0, 121)}</p> */}
      <h4 className={styles.subtitle}>Accessories and functionalities:</h4>
      <ul className={styles.accessories}>
        {accessories.map(item => (
          <li key={item} className={styles.accessoriesItem}>
            <p>{item.slice(0, 25)}</p>
          </li>
        ))}
      </ul>
      <ul className={styles.functionalities}>
        {functionalities.map(item => (
          <li key={item} className={styles.functionalitiesItem}>
            <p>{item.slice(0, 25)}</p>
          </li>
        ))}
      </ul>
      <h4 className={styles.subtitle}>Rental Conditions: </h4>
      <div className={styles.conditionList}>
        <p className={styles.condition}>
          {rentalConditions.split('\n')[0].split(' ').slice(0, 2).join(' ')}
          <span>
            {rentalConditions.split('\n')[0].split(' ').slice(-1).join('')}
          </span>
        </p>
        <p className={styles.condition}>{rentalConditions.split('\n')[1]}</p>
        <p className={styles.condition}>{rentalConditions.split('\n')[2]}</p>
        <p className={styles.condition}>
          Mileage: <span>{mileage.toLocaleString('en-US')}</span>
          {/* <span>{(mileage / 1000).toFixed(3).replace('.', ',')}</span> */}
        </p>
        <p className={styles.condition}>
          Price: <span>{rentalPrice}</span>
        </p>
      </div>
      <a href="tel:+380730000000" className={styles.link}>
        Rental car
      </a>
    </div>
  );
};
export default CarModal;
