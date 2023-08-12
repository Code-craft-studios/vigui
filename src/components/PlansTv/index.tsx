import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';
import CardService from '../CardService';

const PlansTv = () => {
  return (
    <Box
      component='section'
      className={styles.background}
      id={'section-planes'}
    >
      <Container className={styles.container}>
        <Typography
          variant='h3'
          className={styles.title}
          component='h1'
          color='#fff'
          pt={3}
        >
          Servicios
        </Typography>
        <Typography
          mb={5}
          variant='h4'
          className={styles.subtitle}
          component='h2'
          color='#ffffff'
        >
          Internet Hogar
        </Typography>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
              marginTop: {
                xs: '0',
                md: '1.5rem',
              },
            }}
            md={4}
          >
            <CardService
              price='$40.000'
              items={[
                'Dos puntos de televisión',
                'Canales exclusivos',
                '110 canales digitales',
                '+80 canales análogos',
              ]}
              variant='secondary'
              title='+200 canales'
            />
          </Grid>
          <Grid
            item
            xs={12}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            md={8}
          >
            <Box
              component='iframe'
              className={styles.video}
              src='https://www.youtube.com/embed/9JzmrdYx3c4'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default PlansTv;
