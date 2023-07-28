import CustomCard from '../../ui/CustomCard';
import styles from './styles.module.css';
import AnimatedButton from '../../ui/AnimatedButton';
import { Typography } from '@mui/material';
type Variants = "primary" | "secondary";
type CardServiceProps = {
  price: string;
  title: string;
  items: string[];
  variant: Variants;
}
const variants:Record<Variants,string> = {
  primary: styles.colorPrimary,
  secondary: styles.colorSecondary
}
const CardService = ({price, title, items, variant}: CardServiceProps) => {
  return (
    <CustomCard className={`${styles.card} ${variants[variant]}`} headerContent={
      <>
        <Typography className={styles.price}>{ price }</Typography>
        <Typography>{ title }</Typography>
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
