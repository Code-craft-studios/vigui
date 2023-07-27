import Section from '@/ui/Section';
import { Grid, Typography } from '@mui/material';
import BenefitsIconText from '../BenefitsIconText';

type BenefitProps = {
  alt: string;
  src: string;
  title: string;
}

type BenefitsProp = {
  customBenefits?: Array<BenefitProps>
}

const paddings = {
  padding: {
    xs: '1rem',
    md: '1rem 0'
  }
}
const defaultBenefits = [{
    src: '/icon_1.svg',
    alt: 'Router',
    title: 'Descarga de manera ininterrumpida'
  },
  {
    src: '/icon_2.svg',
    alt: 'Megas',
    title: 'Servicio de megas dedicado'
  },
  {
    src: '/icon_2.svg',
    alt: 'Dispositivos',
    title: 'Soporta varios dispositivos conectados'
  },
  {
    src: '/icon_2.svg',
    alt: 'Conexion',
    title: 'Múltiples métodos de conexión'
  }]

const Benefits = ({ customBenefits }: BenefitsProp) => {

  const benefitsToUse = customBenefits ?? defaultBenefits;

  return (
    <Section title='Beneficios' id='section-beneficios'>
      <Grid container spacing={2} pt={5}>
        
        {benefitsToUse.map((benefit, index) => (
          <Grid py={3} xs={6} md={3} sx={paddings} key={index+benefit.alt}>
            <BenefitsIconText src={benefit.src} alt={benefit.alt}>
              <Typography>{benefit.title}</Typography>
            </BenefitsIconText>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};
export default Benefits;
