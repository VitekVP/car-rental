import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Loader from 'components/Shared/Loader/Loader';
import Footer from 'components/Footer/Footer';

import styles from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
export default SharedLayout;
