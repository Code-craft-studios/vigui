import Section from '../../ui/Section';
import { Grid, Typography } from '@mui/material';
import CardService from '@/ui/CardService';

const Plans = () => {
  return (
    <Section title='Servicios' bg='#dedede' id='section-planes'>
      <Typography variant='h5' component='h2'>
        Internet
      </Typography>
      <Grid container spacing={4}>
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
