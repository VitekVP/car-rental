import { RotatingLines } from 'react-loader-spinner';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <RotatingLines strokeColor="teal" width="96" />
    </div>
  );
};

export default Loader;
