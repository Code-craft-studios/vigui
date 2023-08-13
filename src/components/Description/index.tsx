import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';

const Description = () => {
  return (
    <Box
      component='section'
      id='section-conocenos'
      pb={{ xs: 2, sm: 6, md: 8 }}
      px={{ xs: 0 }}
    >
      <Container>
        <Typography
          component='h2'
          mt={2}
          mb={3}
          variant='h3'
          textAlign='center'
        >
          ¿Quienes somos?
        </Typography>
        <Grid container className={styles.container}>
          <Grid
            item
            display={'flex'}
            className={`${styles.card} ${styles.cardOne}`}
            md={6}
          >
            <Typography component='h3' className={styles.title}>
              Nuestra historia
            </Typography>
            <Typography className={styles.text}>
              Vigui Telecomunicaciones es una empresa que lleva mas de 25 años
              trabajando en el municipio de El Santuario. en el sector de las
              telecomunicaciones con la intención de ofrecer soluciones al
              acceso de la television satelital e internet de alta velocidad a
              los habitantes del lugar.
            </Typography>
          </Grid>
          <Grid
            item
            display={'flex'}
            className={`${styles.card} ${styles.cardTwo}`}
            flexDirection={'column'}
            md={6}
          >
            <Typography component='h3' className={styles.title}>
              ¿Que hacemos?
            </Typography>
            <Typography className={styles.text}>
              Somos una empresa de Telecomunicaciones que ofrece servicios de
              Internet Hogar y Empresarial buscando satisfacer las necesidades
              de Comunicación de Santuario Antioquia.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Description;
