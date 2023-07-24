import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import styles from './styles.module.css';

type CardServiceProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

const CardService = ({ title, subtitle }: CardServiceProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper sx={{ p: 4 }}>
        <Box component='article' className={styles.card}>
          <Typography fontWeight={600} className={styles.title}>
            {title}
          </Typography>
          <Typography className={styles.subtitle} padding={0}>
            ${subtitle} x mes
          </Typography>
          <Typography component='p' sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            libero exercitationem quasi temporibus rerum? Maiores aperiam
            molestiae quam laboriosam. Quas aliquid assumenda itaque tenetur
            mollitia distinctio adipisci quidem, expedita maiores?
          </Typography>
          <Button variant='contained' color='primary' sx={{ mt: 3 }}>
            Contratar
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};
export default CardService;
