import { Container } from '@mui/material';
import styles from './styles.module.css';
import MapGoogle from '../MapGoogle';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h2 className={styles.logo}>VIGUI</h2>
            <p>Estamos ubicados en:</p>
            <MapGoogle />
          </div>
          <div className={styles.column}>
            <h3>Contacts</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            velit? perspiciatis, saepe voluptatibus dignissimos nam
            exercitationem iure? Veniam enim itaque facere, optio error expedita
            ex aperiam!
          </div>
          <div className={styles.column}>
            <h3>Horario de atencion</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            velit?
            <h3>Redes sociales</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolorum delectus molestias tempora ipsa debitis. Rem
            assumenda ullam commodi dolorem, sequi alias totam corporis aliquid
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
