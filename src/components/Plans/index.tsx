import Section from '../../ui/Section';
import { Grid, Typography } from '@mui/material';
import CardService from '../CardService';

const Plans = () => {
  return (
    <Section title='Servicios' bg='#0039a4' id='section-planes'>
      <Typography mb={5} variant='h4' component='h2' color='#ffffff'>
        Internet Hogar
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        <Grid xs={3}>
          <CardService price='$44.000' title='4Mb - 20Mb' items={['Navega', 'Descarga', 'Transmite', 'Juega en vivo', 'Reproduce videos']} />
        </Grid>
        <Grid xs={3}>
          <CardService price='$66.000' title='6Mb - 30Mb' items={['Navega', 'Descarga', 'Transmite', 'Juega en vivo', 'Reproduce videos']} />
        </Grid>
        <Grid xs={3}>
          <CardService price='$88.000' title='8Mb - 40Mb' items={['Navega', 'Descarga', 'Transmite', 'Juega en vivo', 'Reproduce videos']} />
        </Grid>
        <Grid xs={3}>
          <CardService price='$111.000' title='10Mb - 50Mb' items={['Navega', 'Descarga', 'Transmite', 'Juega en vivo', 'Reproduce videos']} />
        </Grid>
      </Grid>
      <Typography variant='h5' component='h2'>
        Television
      </Typography>
      <Grid container spacing={4}>
      </Grid>
    </Section>
  );
};

export default Plans;
