import { Grid } from '@mui/material';
import OthersIconText from '../OthersIconText';
import SectionGradient from '@/ui/SectionGradient';

type ServiceProps = {
  alt: string;
  src: string;
  title: string;
  subtitle: string;
};

type ServicesProp = {
  customServices?: Array<ServiceProps>;
};

const paddings = {
  padding: {
    xs: '1rem',
    md: '2rem 0',
  },
};
const defaultServices = [
  {
    src: '/icons/other_services/instalacion.svg',
    alt: 'Instalación',
    title: 'Instalación',
    subtitle:
      'Para toda instalación se realiza un único pago al adquirir el servicio por el costo de $30.000.',
  },
  {
    src: '/icons/other_services/reconexion.svg',
    alt: 'Reconexión',
    title: 'Reconexión',
    subtitle: `Internet: En caso de corte de servicio y quiera realizar reconexión del mismo debe realizar un pago por el valor de $10.000.
    Televisión: Se corta a los dos meses sin pagar. En caso de corte de servicio y quiera realizar reconexión del mismo debe realizar un pago por el valor de $15.000. `,
  },
  {
    src: '/icons/other_services/translado.svg',
    alt: 'Translado',
    title: 'Translado',
    subtitle:
      'En caso de traslado de lugar del servicio tiene un costo de $30.000.',
  },
];

const OthersServices = ({ customServices = defaultServices }: ServicesProp) => {
  return (
    <SectionGradient
      title={'Requisitos y valores'}
      id='section-otros-servicios'
    >
      <Grid container spacing={2} pb={5} pt={8} justifyContent='center'>
        {customServices.map((service, index) => (
          <Grid py={3} xs={12} md={4} item sx={paddings} key={service.alt}>
            <OthersIconText
              src={service.src}
              alt={service.alt}
              title={service.title}
              subtitle={service.subtitle}
            />
          </Grid>
        ))}
      </Grid>
    </SectionGradient>
  );
};
export default OthersServices;
