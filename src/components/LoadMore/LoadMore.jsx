import styles from './LoadMore.module.scss';

const LoadMore = ({ clickBtn }) => {
  return (
    <button type="button" className={styles.btn} onClick={clickBtn}>
      Load More
    </button>
  );
};
export default LoadMore;
