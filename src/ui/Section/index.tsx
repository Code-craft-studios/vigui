import { PropsWithChildren } from 'react';
import { Box, Container } from '@mui/material';
import styles from './styles.module.css';
import Title from '../Title';

type Variants = "primary" | "secondary";

type SectionProps = {
  title: string;
  bg?: string;
  id?: string;
  titleColor?: Variants;
};

const Section = ({
  title,
  bg,
  id,
  children,
  titleColor,
}: PropsWithChildren<SectionProps>) => {
  return (
    <Box
      component='section'
      className={styles.section}
      style={{ background: bg }}
      id={id}
    >
      <Container className={styles.container}>
        <Title text={title} variant={titleColor} />
        {children}
      </Container>
    </Box>
  );
};

export default Section;
