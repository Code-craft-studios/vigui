import Section from '../../ui/Section';
import { Grid, Typography } from '@mui/material';
import CardService from '../CardService';

const Plans = () => {
  return (
    <Section title='Servicios' bg='#0039a4' id='section-planes'>
      <Typography mb={5} variant='h4' component='h2' color='#ffffff'>
        Internet Hogar
      </Typography>
    </Section>
  );
};

export default Plans;
