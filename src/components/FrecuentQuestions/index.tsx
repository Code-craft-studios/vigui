import { Box, Button, Container, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';
import { PHONE } from '@/data/company';

const FrecuentQuestions = () => {
  const MESSAGE = `Hola Vigui telecomunicaciones, mi nombre es ... , tengo dudas sobre el servicio de internet.`;

  return (
    <Box component='section' className={styles.section} id='section-frecuentes'>
      <Container className={styles.container}>
        <Grid container>
          <Grid item xs={8} md={12}>
            <Typography className={styles.title}>
              Haznos conocer tus dudas y comunicate con nosotros
            </Typography>
            <a
              href={`https://api.whatsapp.com/send?phone=${PHONE}&text=${MESSAGE}`}
              target='_blank'
            >
              <Button className={styles.button}>¡Contáctanos!</Button>
            </a>
          </Grid>
        </Grid>
        <img src='./person-faqs.png' className={styles.img} />
      </Container>
    </Box>
  );
};
export default FrecuentQuestions;
