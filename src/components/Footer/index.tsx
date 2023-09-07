import { Box, Container, Grid } from '@mui/material';
import styles from './styles.module.css';
import MapGoogle from '../MapGoogle';
import Horary from '../Horary';
import KnowUs from '../KnowUs';
import ContactInfo from '../ContactInfo';
import Logo from '@/ui/Logo';

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
          spacing={{ xs: 0, md: 4, lg: 6 }}
          columns={{ xs: 1, sm: 2, md: 10 }}
        >
          <Grid item xs={3}>
            <Grid
              container
              columns={{ xs: 2, md: 1 }}
              pb={3}
              justifyContent={{ xs: 'space-between', md: 'flex-start' }}
              alignItems={{ xs: 'center', md: 'flex-start' }}
            >
              <Grid item md={1}>
                <div className={styles.logo}>
                  <Logo />
                </div>
              </Grid>
            </Grid>
            <ContactInfo />
          </Grid>

          <Grid item xs={2} pt={{ xs: 3, md: 0 }}>
            <KnowUs />
          </Grid>

          <Grid item xs={2} pt={{ xs: 3, md: 0 }}>
            <Horary />
          </Grid>
          <Grid item xs={3} pt={{ xs: 3, md: 0 }}>
            <MapGoogle />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
