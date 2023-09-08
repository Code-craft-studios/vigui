import OthersIconText from '../OthersIconText';
import style from './style.module.css';
import SectionGradient from '@/ui/SectionGradient';

type BenefitProps = {
  alt: string;
  src: string;
  title: string;
};

type BenefitsProp = {
  customBenefits?: Array<BenefitProps>;
};

const defaultBenefits = [
  {
    src: './icons/benefits/descarga.svg',
    alt: 'Descarga',
    title: 'Descarga de manera ininterrumpida',
  },
  {
    src: './icons/benefits/megas.svg',
    alt: 'Megas',
    title: 'Servicio de megas dedicado',
  },
  {
    src: './icons/benefits/dispositivos.svg',
    alt: 'Dispositivos',
    title: 'Soporta varios dispositivos conectados',
  },
  {
    src: './icons/benefits/velocidad.svg',
    alt: 'Velocidad',
    title: 'Rendimiento de alta velocidad',
  },
  {
    src: './icons/benefits/conexion.svg',
    alt: 'Conexion',
    title: 'Múltiples métodos de conexión',
  },
];

const Benefits = ({ customBenefits = defaultBenefits }: BenefitsProp) => {
  return (
    <SectionGradient title={'Beneficios'} id={'section-beneficios'}>
      <section className={style.cardContainer}>
        {customBenefits.map((benefit) => (
          <OthersIconText
            alt={benefit.alt}
            src={benefit.src}
            subtitle={benefit.title}
            key={benefit.title}
          />
        ))}
      </section>
    </SectionGradient>
  );
};

export default Benefits;
