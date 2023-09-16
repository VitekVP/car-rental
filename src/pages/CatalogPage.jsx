import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Container from 'components/Shared/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import LoadMore from 'components/LoadMore/LoadMore';
import Loader from 'components/Shared/Loader/Loader';

import { serviseGetCars } from 'Api';

import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [totalCars, setTotalCars] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const allCars = async () => {
      try {
        const resolve = await serviseGetCars();
        setTotalCars(resolve.length);
      } catch (error) {
        setError(error.message);
      }
    };
    allCars();
  }, []);

  useEffect(() => {
    if (page === 1) {
      getFirstCars(page);
      return;
    }
    getCars(page);
  }, [page]);

  const getFirstCars = async page => {
    setLoading(true);
    setError(null);

    try {
      const res = await serviseGetCars(page);

      if (res.length === 0) {
        toast.info('sorry, nothing found :(');
        return;
      }

      setCars(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getCars = async page => {
    setLoading(true);
    setError(null);

    try {
      const res = await serviseGetCars(page);

      if (res.length === 0) {
        toast.info('these are all cars');

        return;
      }

      setCars(prev => [...prev, ...res]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  if (error) {
    toast.error(error);
    return;
  }

  const quantityPage = Math.ceil(totalCars / 8);
  const isLoadMore = quantityPage - page;

  return (
    <section className={styles.wrapper}>
      <Container>
        {loading ? <Loader /> : <CarsList data={cars} />}
        {isLoadMore && <LoadMore clickBtn={handleLoadMore} />}
      </Container>
    </section>
  );
};

export default CatalogPage;
