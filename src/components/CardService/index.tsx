import CustomCard from '../../ui/CustomCard';
import styles from './styles.module.css';
import AnimatedButton from '../../ui/AnimatedButton';

type CardServiceProps = {
  price: string;
  title: string;
  items: string[];
}

const CardService = ({price, title, items}: CardServiceProps) => {
  return (
    <CustomCard className={styles.card} headerContent={
      <>
        <p className={styles.price}>{ price }</p>
        <p className={styles.title}>{ title }</p>
      </>
    }
    bodyContent={
      <div className={styles.textBody}>
          <ul className={styles.list}>
            { items.map((item, index) =>
              <li key={index+item}>{ item }</li>
            )}
          </ul>
          <AnimatedButton className={styles.button}>Comprar</AnimatedButton>
        </div>
    } />
  );
};

export default CardService;
