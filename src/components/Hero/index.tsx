import Image from 'next/image';
import styles from './styles.module.css';
import { Box, Button, Typography } from '@mui/material';
import Title from '@/ui/Title';

const Hero = () => {
  return (
    <Box component='div' className={styles.hero} id='section-inicio'>
      <Box component='section' className={styles.column1}>
        <Box>
          <Title>Plan</Title>
          <Typography component='p'>
            descripcion Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quas maiores facilis mollitia
            voluptatibus, inventore dolorum optio consectetur ipsa reiciendis
            deserunt?
          </Typography>
          <Button variant='contained' color='secondary'>
            Contratar
          </Button>
        </Box>
      </Box>
      <Box component='section' className={styles.column2}>
        <Image
          src='/manos.webp'
          alt='manos'
          width={500}
          height={500}
          className={styles.img}
          priority={true}
        />
      </Box>
    </Box>
  );
};
export default Hero;
