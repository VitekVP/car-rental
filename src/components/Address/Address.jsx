import styles from './Address.module.scss';

const Address = () => {
  const data = [
    {
      href: 'https://maps.app.goo.gl/4pJwMB9opb4pdP3s5',
      text: 'Kharkov city, Gagarin Avenue, 20',
    },
    {
      href: 'mailto:mvrent@gmail.com',
      text: 'mvrent@gmail.com',
    },
    {
      href: 'tel:+380970000000',
      text: '+380970000000',
    },
  ];

  return (
    <address>
      <p className={styles.title}>MVrent</p>
      <ul>
        {data.map(({ href, text }) => (
          <li key={text}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={styles.link}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
};

export default Address;
