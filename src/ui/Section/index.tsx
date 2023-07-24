import { PropsWithChildren } from 'react';
import { Box, Container } from '@mui/material';
import styles from './styles.module.css';
import Title from '../Title';

type SectionProps = {
  title: string;
  bg?: string;
  id?: string;
};

const Section = ({
  title,
  bg,
  id,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <Box
      component='section'
      className={styles.section}
      style={{ background: bg }}
      id={id}
    >
      <Container className={styles.container}>
        <Title text={title} />
        {children}
      </Container>
    </Box>
  );
};

export default Section;
