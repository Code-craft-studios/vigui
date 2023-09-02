import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';
import CardService from '../CardService';

const PlansInternet = () => {
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
                md: '2.5rem',
              },
            }}
            md={4}
          >
            <CardService
              price='$44.000'
              items={[
                'Navega',
                'Descarga',
                'Transmite',
                'Juega en vivo',
                'Reproduce videos',
              ]}
              variant='primary'
              title='20 Mb'
            />
          </Grid>
          <Grid
            item
            xs={12}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            md={4}
          >
            <CardService
              price='$66.000'
              items={[
                'Navega',
                'Descarga',
                'Transmite',
                'Juega en vivo',
                'Reproduce videos',
              ]}
              variant='primary'
              title='30 Mb'
            />
          </Grid>
          <Grid
            item
            xs={12}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
              marginTop: {
                xs: '0',
                md: '2.5rem',
              },
            }}
            md={4}
          >
            <CardService
              price='$88.000'
              items={[
                'Navega',
                'Descarga',
                'Transmite',
                'Juega en vivo',
                'Reproduce videos',
              ]}
              variant='primary'
              title='40 Mb'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlansInternet;
