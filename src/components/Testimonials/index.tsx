import { Box, Typography } from '@mui/material';
import { CarouselTestimonial } from '../CarouselTestimonial';

const Testimonials = () => {
  return (
    <Box component='section' sx={{ width: '100%' }}>
      <Typography
        variant='h4'
        component='h4'
        mt={2}
        mb={3}
        textAlign='center'
        sx={{ fontWeight: 'bold' }}
      >
        Testimonios
      </Typography>
      <CarouselTestimonial />
    </Box>
  );
};
export default Testimonials;
