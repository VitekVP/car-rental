import { NavLink } from 'react-router-dom';

import Container from 'components/Shared/Container/Container';

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
      </Container>
    </header>
  );
};

export default Header;
