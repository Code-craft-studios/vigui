import { Box, Grid, Typography } from "@mui/material";
import Carrousel from "../Carrousel";

const Team = () => {

  return (
    <Box component='section' >
      <Typography
        variant="h4"
        component='h4'
        mt={2}
        mb={3}
        textAlign='center'
        sx={{ fontWeight: 'bold' }}
      >Nuestro Equipo</Typography>
         <Carrousel />
    </Box>
  )
};

export default Team