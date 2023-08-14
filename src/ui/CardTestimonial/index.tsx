import { Box } from '@mui/material';
import styles from './styles.module.css';

interface CardTestimonialProps {
  img: JSX.Element;
  main: JSX.Element;
  secondary: JSX.Element;
}

const CardTestimonial = ({ img, main, secondary }: CardTestimonialProps) => {
  return (
    <Box className={styles.testimonialCard}>
      {img}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          height: 'auto',
        }}
      >
        <Box className={styles.testimonialInfo}>{main}</Box>
        {secondary}
      </Box>
    </Box>
  );
};
export default CardTestimonial;
