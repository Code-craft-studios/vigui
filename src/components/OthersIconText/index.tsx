import style from './style.module.css';

type Props = {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
};

const OthersIconText = ({ subtitle, src, alt, title }: Props) => {
  return (
    <article className={style.card}>
      <img src={src} alt={alt} />
      {title}
      {subtitle}
    </article>
  );
};

export default OthersIconText;
