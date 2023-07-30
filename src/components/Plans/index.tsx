import Section from '../../ui/Section';
import { Typography } from '@mui/material';

const Plans = () => {
  return (
    <Section title='Servicios' bg='#0039a4' id='section-planes' titleColor={'secondary'}>
      <Typography mb={5} variant='h4' component='h2' color='#ffffff'>
        Internet Hogar
      </Typography>
    </Section>
  );
};

export default Plans;
