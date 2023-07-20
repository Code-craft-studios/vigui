import Acordion from '@/ui/Acordion';
import Section from '@/ui/Section';
import { Button } from '@mui/material';

const FrecuentQuestions = () => {
  return (
    <Section title='Dudas frecuentes' bg='#dedede'>
      <Acordion />
      <Button
        variant='contained'
        color='primary'
        sx={{ width: 'max-content', margin: 'auto' }}
      >
        Contactanos
      </Button>
    </Section>
  );
};
export default FrecuentQuestions;
