import { Typography } from '@mui/material';
import styles from './styles.module.css';

type Variants = "primary" | "secondary";

type Props = {
  text: string;
  variant?: Variants;
};

const variants:Record<Variants,string> = {
  primary: styles.primary,
  secondary: styles.secondary
}

const Title = ({ text, variant = 'primary' }: Props) => {
  return (
    <Typography className={`${styles.title} ${variants[variant]}`} fontWeight={700} textAlign={'center'}>
      {text}
    </Typography>
  );
};

export default Title;
