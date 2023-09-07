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
        <button className={style.button}>Comprar</button>
      </section>
    </article>
  );
};

export default CardPlan;
