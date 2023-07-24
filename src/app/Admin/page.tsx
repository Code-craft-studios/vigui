import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

const Admin = () => {
  return (
    <Box
      component='section'
      display={'flex'}
      flexDirection={'column'}
      p={2}
      gap={2}
    >
      <Typography variant='body1'>Pagina en contruccion</Typography>
      <Link href={'/'}>
        <Button variant='contained'>Volver al inicio</Button>
      </Link>
    </Box>
  );
};

export default Admin;
