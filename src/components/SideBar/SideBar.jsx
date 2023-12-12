import styles from './SideBar.module.scss';

const SideBar = ({ filter, changeFilter }) => {
  return (
    <div className={styles.wrapper}>
      <form>
        <div className={styles.boxFilter}>
          <input
            type="text"
            id="inputFilter"
            name="filter"
            value={filter}
            onChange={changeFilter}
            className={filter ? styles.fieldFilterFocused : styles.fieldFilter}
          />
          <label htmlFor="inputFilter" className={styles.nameFilter}>
            Search for a car by make
          </label>
        </div>
      </form>
    </div>
  );
};
export default SideBar;
