import { Box, Container, Grid } from '@mui/material';
import BenefitsIconText from '../BenefitsIconText';
import styles from './styles.module.css';
import Title from '@/ui/Title';

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
    <section
      className={styles.section}
      id={'section-beneficios'}
    >
      <Container className={styles.container}>
        <Title text={'Beneficios'} />
        <Grid container spacing={2} pt={5} justifyContent='center'>
          
          {customBenefits.map((benefit, index) => (
            <Grid py={3} xs={6} md={12/5} item sx={paddings} key={index+benefit.alt}>
              <BenefitsIconText src={benefit.src} alt={benefit.alt}>{benefit.title}</BenefitsIconText>
            </Grid>
          ))}
        </Grid>
      </Container>
      <img src="/images/bg-gradient-left.svg" className={`${styles.bgContainer} ${styles.left}`} />
      <img src="/images/bg-gradient-right.svg" className={`${styles.bgContainer} ${styles.right}`} />
    </section>
  );
};
export default Benefits;
