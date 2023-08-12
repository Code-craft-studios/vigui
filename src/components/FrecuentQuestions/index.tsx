import { Box, Button, Container, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';

const FrecuentQuestions = () => {
  return (
    <Box component='section' className={styles.section} id='section-frecuentes'>
      <Container className={styles.container}>
        <Grid container>
          <Grid item xs={8} md={12}>
            <Typography className={styles.title}>
              Haznos conocer tus dudas y comunicate con nosotros
            </Typography>
            <Button className={styles.button}>¡Contáctanos!</Button>
          </Grid>
        </Grid>
        <img src='/person-faqs.png' className={styles.img} />
      </Container>
    </Box>
  );
};
export default FrecuentQuestions;
