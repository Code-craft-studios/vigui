import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';
import MapGoogle from '../MapGoogle';

const Footer = () => {
  return (
    <Box
      component='footer'
      className={styles.footer}
      id='section-footer'
      py={{ xs: 4, md: 6, lg: 8 }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 4, lg: 6 }}
          columns={{ xs: 1, sm: 2, md: 5 }}
        >
          <Grid item xs={2}>
            <Typography className={styles.logo} fontWeight='bold'>
              VIGUI
            </Typography>
            <Typography component='p' mb={{ xs: 2 }}>
              Estamos ubicados en:
            </Typography>
            <MapGoogle />
          </Grid>

          <Grid item xs={1}>
            <Typography variant='h6' component='h2' fontWeight='bold'>
              Contacts
            </Typography>
            <Typography variant='body1' component='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              velit? perspiciatis, saepe voluptatibus dignissimos nam
              exercitationem iure? Veniam enim itaque facere, optio error
              expedita ex aperiam!
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <Typography variant='h6' component='h2' fontWeight='bold'>
              Horario de atencion
            </Typography>
            <Typography variant='body1' component='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              velit?
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <Typography variant='h6' component='h2' fontWeight='bold'>
              Redes sociales
            </Typography>
            <Typography variant='body1' component='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis dolorum delectus molestias tempora ipsa debitis. Rem
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
