import { Container, Paper } from '@mui/material';
import styles from './styles.module.css';
import Title from '@/ui/Title';

const Description = () => {
  return (
    <section className={styles.description}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.column1}>
            <Title>Historia</Title>
            <p>
              Descripcion Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Animi, enim?
            </p>
          </div>
          <div className={styles.column2}>
            <Title>¿Que hacemos?</Title>
            <Paper sx={{ p: 4 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              consectetur, facere atque magnam obcaecati deleniti. Soluta aut
              vitae nemo expedita.
            </Paper>
          </div>
          <div className={styles.column3}>
            <Title>¿Que tecnologias usamos?</Title>
            <Paper sx={{ p: 4 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              consectetur, facere atque magnam obcaecati deleniti. Soluta aut
              vitae nemo expedita. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus dolores maiores quibusdam tenetur
              ducimus quas, repellendus hic quod officia nobis laborum
              accusantium deleniti doloribus ex debitis optio excepturi minima
              unde earum iste. Consequuntur fugiat laboriosam a, laborum
              dignissimos, dicta harum quo aliquam necessitatibus in, hic vel
              dolore sapiente quia mollitia!
            </Paper>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Description;
