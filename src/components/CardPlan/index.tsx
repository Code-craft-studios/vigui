import { PHONE } from '@/data/company';
import style from './style.module.css';

type Variants = 'primary' | 'secondary';

type Props = {
  title: string;
  subtitle: string;
  price: string;
  items: string[];
  variant: Variants;
};

const variants: Record<Variants, string> = {
  primary: style.primary,
  secondary: style.secondary,
};

const CardPlan = (props: Props) => {
  const MESSAGE = `Hola Vigui telecomunicaciones, mi nombre es ... y estoy interesado en el plan de ${props.title} de ${props.price} pesos colombianos.`;

  return (
    <article className={`${variants[props.variant]} ${style.card} `}>
      <header className={style.header}>
        <h2>{props.price}</h2>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
      </header>
      <section className={style.section}>
        {props.items.map((item) => (
          <p key={item}>{item}</p>
        ))}
        <a
          href={`https://api.whatsapp.com/send?phone=${PHONE}&text=${MESSAGE}`}
          target='_blank'
        >
          <button className={style.button}>Comprar</button>
        </a>
      </section>
    </article>
  );
};

export default CardPlan;
