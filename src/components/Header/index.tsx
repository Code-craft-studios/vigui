import { Box, Container, Typography } from '@mui/material';
import styles from './styles.module.css';

const Header = () => {
  return (
    <Box component='header' className={styles.header}>
      <Container>
        <Box className={styles.container}>
          <Typography component='h2' className={styles.logo}>
            VIGUI
          </Typography>
          <Box component='nav' className={styles.nav}>
            <a href='#section-inicio'>Inicio</a>
            <a href='#section-conocenos'>Conocenos</a>
            <a href='#section-planes'>Planes y servicios</a>
            <a href='#section-testimonios'>Testimonios</a>
            <a href='#section-frecuentes'>Frecuentes</a>
            <a href='#section-footer'>Contacto</a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
