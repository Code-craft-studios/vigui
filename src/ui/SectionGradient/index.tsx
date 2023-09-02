import { PropsWithChildren } from 'react';
import { Container } from '@mui/material';
import styles from './styles.module.css';
import Title from '../Title';

type SectionGradientProps = {
  title: string;
  bg?: string;
  id?: string;
};

const SectionGradient = ({
  title,
  bg,
  id,
  children,
}: PropsWithChildren<SectionGradientProps>) => {
  return (
    <section
      className={styles.section}
      style={{ background: bg }}
      id={id}
    >
      <Container>
        <Title text={title} variant={'primary'} />
        {children}
      </Container>
      <img src="/images/bg-gradient-left.svg" className={`${styles.bgContainer} ${styles.left}`} />
      <img src="/images/bg-gradient-right.svg" className={`${styles.bgContainer} ${styles.right}`} />
    </section>
  );
};

export default SectionGradient;
