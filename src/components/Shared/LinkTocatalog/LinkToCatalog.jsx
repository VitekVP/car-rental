import { Link } from 'react-router-dom';

import styles from './LinkToCatalog.module.scss';

const LinkToCatalog = () => {
  return (
    <Link to="/catalog" className={styles.link}>
      Select car!!!
    </Link>
  );
};

export default LinkToCatalog;
