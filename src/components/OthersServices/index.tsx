import OthersIconText from '../OthersIconText';
import SectionGradient from '@/ui/SectionGradient';
import style from './style.module.css';

type ServiceProps = {
  alt: string;
  src: string;
  title: string;
  subtitle: string;
};

type ServicesProp = {
  customServices?: Array<ServiceProps>;
};

const defaultServices = [
  {
    src: './icons/other_services/instalacion.svg',
    alt: 'Instalación',
    title: 'Instalación',
    subtitle:
      'Para toda instalación se realiza un único pago al adquirir el servicio por el costo de $30.000.',
  },
  {
    src: './icons/other_services/reconexion.svg',
    alt: 'Reconexión',
    title: 'Reconexión',
    subtitle: `Internet: En caso de corte de servicio y quiera realizar reconexión del mismo debe realizar un pago por el valor de $10.000.
    Televisión: Se corta a los dos meses sin pagar. En caso de corte de servicio y quiera realizar reconexión del mismo debe realizar un pago por el valor de $15.000. `,
  },
  {
    src: './icons/other_services/translado.svg',
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
      <section className={style.containerCards}>
        {customServices.map((service) => (
          <OthersIconText
            src={service.src}
            alt={service.alt}
            title={service.title}
            subtitle={service.subtitle}
            key={service.title}
          ></OthersIconText>
        ))}
      </section>
    </SectionGradient>
  );
};
export default OthersServices;
