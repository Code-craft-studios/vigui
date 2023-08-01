import ListItemsLink from '@/ui/ListItemsLink';
import { Box, Paper } from '@mui/material';

const MapGoogle = () => {
  return (
    <>
      <Box component='section' pb={2}>
        <Paper sx={{ p: 2 }}>
          Contenido donde se mostrará un mapa de google maps Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Veniam amet magnam corporis
          necessitatibus inventore minus facilis libero aut expedita ipsam?
        </Paper>
      </Box>
      <ListItemsLink
        customLinks={[
          {
            icon: '/icons/contact/location-icon.svg',
            text: 'Carrera 48 #48-92 Santuario Ant.',
            url: 'https://maps.google.com',
          }
        ]}
      />
    </>
  );
};

export default MapGoogle;
