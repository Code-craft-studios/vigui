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
        <CardService title='100Mbps' subtitle='100.5' />
        <CardService title='50Mbps' subtitle='50.5' />
        <CardService title='16Mbps' subtitle='16.5' />
        <CardService title='8Mbps' subtitle='8.5' />
      </Grid>
      <Typography variant='h5' component='h2'>
        Television
      </Typography>
      <Grid container spacing={4}>
        <CardService title='100Mbps' subtitle='100.5' />
        <CardService title='50Mbps' subtitle='50.5' />
        <CardService title='16Mbps' subtitle='16.5' />
        <CardService title='8Mbps' subtitle='8.5' />
      </Grid>
    </Section>
  );
};

export default Plans;
