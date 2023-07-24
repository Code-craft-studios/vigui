import Image from 'next/image';
import styles from './styles.module.css';
import { Button } from '@mui/material';
import Title from '@/ui/Title';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.column1}>
        <div>
          <Title>Plan</Title>
          <p>
            descripcion Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quas maiores facilis mollitia
            voluptatibus, inventore dolorum optio consectetur ipsa reiciendis
            deserunt?
          </p>
          <Button variant='contained' color='secondary'>
            Contratar
          </Button>
        </div>
      </section>
      <section className={styles.column2}>
        <img
          src='/manos.webp'
          alt='manos'
          className={styles.img}
        />
      </section>
    </div>
  );
};
export default Hero;
