import { NavLink, Link } from 'react-router-dom';

import Container from 'components/Shared/Container/Container';
import Logo from 'components/Logo/Logo';

import { FaPhoneVolume } from 'react-icons/fa';

import styles from './Header.module.scss';

const Header = () => {
  const data = [
    { href: '', text: 'Home' },
    { href: 'catalog', text: 'Catalog' },
    { href: 'favorites', text: 'Favorites' },
  ];

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.box}>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
          <nav>
            <ul className={styles.navigate}>
              {data.map(({ href, text }) => (
                <li key={text}>
                  <NavLink to={`/${href}`} className={styles.link}>
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.boxPhone}>
            <FaPhoneVolume size={28} className={styles.icon} />
            <p className={styles.phone}>+380970000000</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
