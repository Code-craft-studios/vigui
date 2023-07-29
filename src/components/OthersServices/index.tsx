import { Box, Container, Grid } from '@mui/material';
import OthersIconText from '../OthersIconText';
import Title from '@/ui/Title';
import styles from './styles.module.css';

type ServiceProps = {
  alt: string;
  src: string;
  title: string;
  subtitle: string;
}

type ServicesProp = {
  customServices?: Array<ServiceProps>
}

const paddings = {
  padding: {
    xs: '1rem',
    md: '2rem 0'
  }
}
const defaultServices = [{
    src: '/icons/other_services/reconexion.svg',
    alt: 'Reconexión',
    title: 'Reconexión',
    subtitle: 'Soporta varios dispositivos conectados'
  },
  {
    src: '/icons/other_services/instalacion.svg',
    alt: 'Instalación',
    title: 'Instalación',
    subtitle: 'Soporta varios dispositivos conectados'
  },
  {
    src: '/icons/other_services/translado.svg',
    alt: 'Translado',
    title: 'Translado',
    subtitle: 'Soporta varios dispositivos conectados'
  }]

const OthersServices =  ({ customServices =  defaultServices }: ServicesProp) => {
  return (

    <section
      className={styles.section}
    >
      <Container className={styles.container}>
        <Title text={'Otros servicios'} />
        <Grid container spacing={2} py={5} justifyContent='center'>
          
          {customServices.map((service, index) => (
            <Grid py={3} xs={6} md={12/5} item sx={paddings} key={index+service.alt}>
              <OthersIconText src={service.src} alt={service.alt} title={service.title} subtitle={service.subtitle} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <img src="/images/bg-gradient-left.svg" className={`${styles.bgContainer} ${styles.left}`} />
      <img src="/images/bg-gradient-right.svg" className={`${styles.bgContainer} ${styles.right}`} />
    </section>
  );
};
export default OthersServices;
