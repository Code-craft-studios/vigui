import { Button, Grid, Paper } from '@mui/material';
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
        <div className={styles.card}>
          <h4 className={styles.title}>{title}</h4>
          <h3 className={styles.subtitle}>${subtitle} x mes</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          libero exercitationem quasi temporibus rerum? Maiores aperiam
          molestiae quam laboriosam. Quas aliquid assumenda itaque tenetur
          mollitia distinctio adipisci quidem, expedita maiores?
          <Button variant='contained' color='primary'>
            Contratar
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};
export default CardService;
