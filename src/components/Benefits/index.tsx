import { Grid } from '@mui/material';
import BenefitsIconText from '../BenefitsIconText';
import SectionGradient from '@/ui/SectionGradient';

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
    md: '2rem 0'
  }
}
const defaultBenefits = [{
    src: '/icons/benefits/descarga.svg',
    alt: 'Descarga',
    title: 'Descarga de manera ininterrumpida'
  },
  {
    src: '/icons/benefits/megas.svg',
    alt: 'Megas',
    title: 'Servicio de megas dedicado'
  },
  {
    src: '/icons/benefits/dispositivos.svg',
    alt: 'Dispositivos',
    title: 'Soporta varios dispositivos conectados'
  },
  {
    src: '/icons/benefits/velocidad.svg',
    alt: 'Velocidad',
    title: 'Rendimiento de alta velocidad'
  },
  {
    src: '/icons/benefits/conexion.svg',
    alt: 'Conexion',
    title: 'Múltiples métodos de conexión'
  },]

const Benefits = ({ customBenefits =  defaultBenefits }: BenefitsProp) => {
  return (
    <SectionGradient title={'Beneficios'} id={'section-beneficios'}>
      <Grid container spacing={2} pb={5} pt={8} justifyContent='center'>
        {customBenefits.map((benefit, index) => (
          <Grid py={3} xs={6} md={12/5} item sx={paddings} key={benefit.alt}>
            <BenefitsIconText src={benefit.src} alt={benefit.alt}>{benefit.title}</BenefitsIconText>
          </Grid>
        ))}
      </Grid>
    </SectionGradient>
  );
};
export default Benefits;
