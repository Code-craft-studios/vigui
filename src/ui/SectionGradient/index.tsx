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
    <section className={styles.section} style={{ background: bg }} id={id}>
      <Container>
        <Title text={title} variant={'primary'} />
        {children}
      </Container>
    </section>
  );
};

export default SectionGradient;
