import { Typography } from '@mui/material';
import styles from './styles.module.css';

type Props = {
  children: string;
};

const Title = ({ children }: Props) => {
  return (
    <Typography className={styles.title} fontWeight={600} textAlign={'center'}>
      {children}
    </Typography>
  );
};

export default Title;
