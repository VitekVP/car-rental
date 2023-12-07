import Container from 'components/Shared/Container/Container';
import LinkToCatalog from 'components/Shared/LinkTocatalog/LinkToCatalog';

import fone from '../../images/logo.png';

import styles from './Plaсeholder.module.scss';

const Plaсeholder = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.box}>
          <p className={styles.text}>Your favorite cars list is empty</p>
          <LinkToCatalog />
        </div>
        <img src={fone} alt="placeholder" className={styles.content} />
      </Container>
    </section>
  );
};
export default Plaсeholder;
