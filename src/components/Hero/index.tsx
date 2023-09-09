import styles from './styles.module.css';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box
      component='div'
      className={styles.hero}
      id='section-inicio'
      style={{ backgroundImage: 'url(./banner-desktop.webp)' }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} className={styles.column1}>
            <img src='./person.png' className={styles.img} />
          </Grid>
          <Grid item xs={12} md={6} className={styles.column2}>
            <Typography component='h1' className={styles.title}>
              Disfruta de la mejor velocidad
              <br />
              con nuestro plan de
              <br />
              <span>10 Mb a 250 Mb</span>
            </Typography>
            <a href='#section-planes'>
              <Button className={styles.button}>¡Contrata ahora!</Button>
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Hero;
