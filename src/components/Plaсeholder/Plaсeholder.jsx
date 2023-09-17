import Container from 'components/Shared/Container/Container';
import fone from '../../images/logo.png';

import styles from './Plaсeholder.module.scss';

const Plaсeholder = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <img src={fone} alt="placeholder" className={styles.content} />
      </Container>
    </section>
  );
};
export default Plaсeholder;
