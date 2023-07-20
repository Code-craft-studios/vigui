import { Box } from '@mui/material';
import Link from 'next/link';

const Admin = () => {
  return (
    <div>
      <Link href={'/'}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
          Pagina en contruccion
          <button>Volver al inicio</button>
        </Box>
      </Link>
    </div>
  );
};

export default Admin;
