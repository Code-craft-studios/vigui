import { Box, Container, Grid, Paper } from '@mui/material';
import Title from '@/ui/Title';

const Description = () => {
  return (
    <Box
      component='section'
      id='section-conocenos'
      py={{ xs: 2, sm: 6, md: 8 }}
      px={{ xs: 0 }}
      bgcolor={'#dedede'}
    >
      <Container>
        <Grid container spacing={{ xs: 2, md: 4, lg: 6 }}>
          <Grid item display={'flex'} flexDirection={'column'} gap={2} md={6}>
            <Title>Historia</Title>
            <Paper sx={{ p: 4 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              consectetur, facere atque magnam obcaecati deleniti. Soluta aut
              vitae nemo expedita.
            </Paper>
          </Grid>
          <Grid item display={'flex'} flexDirection={'column'} gap={2} md={6}>
            <Title>¿Que hacemos?</Title>
            <Paper sx={{ p: 4 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              consectetur, facere atque magnam obcaecati deleniti. Soluta aut
              vitae nemo expedita.
            </Paper>
          </Grid>
          <Grid item display={'flex'} flexDirection={'column'} gap={2}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Description;
