import { Box, Container, Typography } from '@mui/material';
import styles from './styles.module.css';
import LogoIcon from '@/ui/LogoIcon';

const Features = () => {
  return (
    <Box
      component='section'
      id='section-conocenos'
      py={{ xs: 2, sm: 6, md: 8 }}
      className={styles.background}
    >
      <img
        src='./background-features.webp'
        className={styles.imgbg}
        alt='fondo naranja'
      />
      <Container className={styles.container}>
        <div className={`${styles.textContainer} ${styles.textLeft}`}>
          <LogoIcon />
          <Typography className={styles.text}>
            Ofrecemos el 100% de los megas
          </Typography>
        </div>
        <div className={`${styles.textContainer} ${styles.textRight}`}>
          <Typography className={styles.text}>
            Cortos tiempos de espera para instalacion
          </Typography>
          <LogoIcon />
        </div>
        <div className={`${styles.textContainer} ${styles.textLeft}`}>
          <LogoIcon />
          <Typography className={styles.text}>
            Disponemos de muchas líneas de respaldo para evitar caídas de
            internet
          </Typography>
        </div>
        <div className={`${styles.textContainer} ${styles.textRight}`}>
          <Typography className={styles.text}>
            Ofrecemos rápida atencion al cliente
          </Typography>
          <LogoIcon />
        </div>
        <div className={`${styles.textContainer} ${styles.textLeft}`}>
          <LogoIcon />
          <Typography className={styles.text}>
            Internet 100% estable y dedicado
          </Typography>
        </div>
        <div className={`${styles.textContainer} ${styles.textRight}`}>
          <Typography className={styles.text}>
            Megaje libre en horario nocturno dependiendo la saturacion
          </Typography>
          <LogoIcon />
        </div>
      </Container>
    </Box>
  );
};
export default Features;
