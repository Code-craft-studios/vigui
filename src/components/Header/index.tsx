import { Box, Container } from '@mui/material';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Box className={styles.container}>
          <div className={styles.logo}>
            <h1>VIGUI</h1>
          </div>
          <nav className={styles.nav}>
            <a href=''>Conocenos</a>
            <a href=''>Planes y servicios</a>
            <a href=''>Consultas</a>
            <a href=''>Testimonios</a>
            <a href=''>Contacto</a>
          </nav>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
