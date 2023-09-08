import { Box, Container, Typography } from '@mui/material';
import styles from './styles.module.css';

const Features = () => {
  return (
    <Box
      component='section'
      id='section-conocenos'
      py={{ xs: 2, sm: 6, md: 8 }}
      className={styles.background}
      style={{ backgroundImage: 'url(./background-features.webp)' }}
    >
      <Container className={styles.container}>
        <div className={`${styles.textContainer} ${styles.textLeft}`}>
          <Typography className={styles.text}>
            Ofrecemos el 100% de los megas
          </Typography>
        </div>
        <div className={`${styles.textContainer} ${styles.textRight}`}>
          <Typography className={styles.text}>
            Cortos tiempos de espera para instalacion
          </Typography>
        </div>
        <div className={`${styles.textContainer} ${styles.textLeft}`}>
          <Typography className={styles.text}>
            Disponemos de muchas líneas de respaldo para evitar caídas de
            internet
          </Typography>
        </div>
        <div className={`${styles.textContainer} ${styles.textRight}`}>
          <Typography className={styles.text}>
            Ofrecemos rápida atencion al cliente
          </Typography>
        </div>
        <div className={`${styles.textContainer} ${styles.textLeft}`}>
          <Typography className={styles.text}>
            Internet 100% estable y dedicado
          </Typography>
        </div>
        <div className={`${styles.textContainer} ${styles.textRight}`}>
          <Typography className={styles.text}>
            Megaje libre en horario nocturno dependiendo la saturacion
          </Typography>
        </div>
      </Container>
    </Box>
  );
};
export default Features;
