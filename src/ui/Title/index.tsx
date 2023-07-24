import { Typography } from '@mui/material';
import styles from './styles.module.css';

type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return (
    <Typography className={styles.title} fontWeight={600} textAlign={'center'}>
      {text}
    </Typography>
  );
};

export default Title;
