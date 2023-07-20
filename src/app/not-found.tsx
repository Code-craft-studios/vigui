import Link from 'next/link';
import styles from './styles/not-found.module.css';

const NotFound = () => {
  return (
    <main className={styles.notfound}>
      <h1>404</h1>
      <p>Ups! pagina no encontrada</p>
      <Link href='/'>
        <button>Volver al inicio</button>
      </Link>
    </main>
  );
};

export default NotFound;
