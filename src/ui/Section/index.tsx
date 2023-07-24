import { Box, Container } from '@mui/material';
import styles from './styles.module.css';
import Title from '../Title';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  bg?: string;
  id?: string;
};

const Section = ({ title, children, bg, id }: SectionProps) => {
  return (
    <Box
      component='section'
      className={styles.section}
      style={{ background: bg }}
      id={id}
    >
      <Container className={styles.container}>
        <Title>{title}</Title>
        {children}
      </Container>
    </Box>
  );
};

export default Section;
