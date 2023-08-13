import { Box } from '@mui/material';
import { JSX } from 'react';

import styles from './styles.module.css';

interface CardMemberProps {
  img: JSX.Element;
  main: JSX.Element;
  secondary?: JSX.Element;
}

export const MinimalCard = ({ img, main, secondary }: CardMemberProps) => (
  <Box className={styles.member}>
    {img}
    <Box className={styles.member__text}>
      {main}
      {secondary}
    </Box>
  </Box>
);
