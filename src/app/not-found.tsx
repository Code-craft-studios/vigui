import Link from 'next/link';
import styles from './styles/not-found.module.css';
import { Box, Button, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box component='main' className={styles.notfound}>
      <Typography variant='h2' component='h2'>
        404
      </Typography>
      <Typography component='p' sx={{ mb: 2 }}>
        Ups! pagina no encontrada
      </Typography>
      <Link href='./'>
        <Button variant='contained'>Volver al inicio</Button>
      </Link>
    </Box>
  );
};

export default NotFound;
