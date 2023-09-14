import { useEffect, useState } from 'react';

import Container from 'components/Shared/Container/Container';

import { getCars } from 'Api';

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCars()
      .then(res => {
        console.log(res);
        setCars(res);
      })
      .catch(error => setError(error.toJson()));
  }, []);
  //   console.log(cars);

  return (
    <section className="">
      <Container></Container>
    </section>
  );
};
export default CarsList;
