import { Container } from '@mui/material';
import styles from './styles.module.css';
import Title from '../Title';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  bg?: string;
};

const Section = ({ title, children, bg }: SectionProps) => {
  return (
    <section className={styles.section} style={{ background: bg }}>
      <Container className={styles.container}>
        <Title>{title}</Title>
        {children}
      </Container>
    </section>
  );
};

export default Section;
