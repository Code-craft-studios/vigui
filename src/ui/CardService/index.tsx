import AnimatedButton from '../AnimatedButton';
import styles from './styles.module.css';

type CardServiceProps = {
  price: string;
  title: string;
  items: string[];
};

const CardService = ({ price, title, items }: CardServiceProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.price}>{ price }</p>
        <p className={styles.title}>{ title }</p>
      </div>
      <div className={styles.body}>
        <div className={styles.textBody}>
          <ul className={styles.list}>
            { items.map((item, index) =>
              <li key={index+item}>{ item }</li>
            )}
          </ul>
          <AnimatedButton title='Comprar' className={styles.button}/>
        </div>
      </div>
    </div>
  );
};
export default CardService;
