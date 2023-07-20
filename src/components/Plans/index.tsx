import Section from '../../ui/Section';
import { Grid } from '@mui/material';
import CardService from '@/ui/CardService';

const Plans = () => {
  return (
    <Section title='Servicios' bg='#dedede'>
      <h2>Internet</h2>
      <Grid container spacing={4}>
        <CardService title='100Mbps' subtitle='100.5' />
        <CardService title='50Mbps' subtitle='50.5' />
        <CardService title='16Mbps' subtitle='16.5' />
        <CardService title='8Mbps' subtitle='8.5' />
      </Grid>
      <h2>Television</h2>
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
