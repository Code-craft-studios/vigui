'use client';
import CardTestimonial from '@/ui/CardTestimonial';
import { Box, SxProps, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import styles from './styles.module.css';
import { supbaseLocalClient } from '@/lib/modules';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const defaultTestimonials = [
  {
    img: './images/vigui-testimonios-telecomunicacion-desktop.webp',
    name: 'Natalia Martínez',
    servicio: 'Internet',
    testimonio:
      'Tuve varios proveedores de internet, hasta que encontré esta empresa. fue la solucion a todos mis problemas',
  },
  {
    img: './images/vigui-testimonios-ubicaciones-desktop.webp',
    name: 'Valentina Herrera',
    servicio: 'Internet',
    testimonio:
      'Llegué a Santuario y tenia que decidirme por una empresa de internet para mi trabajo, empecé a buscar y encontré viguitelecomunicaciones, han sido la mejor empresa de todas',
  },
  {
    img: './images/vigui-testimonios-horarios-desktop.webp',
    name: 'Santiago Hernández',
    servicio: 'Internet',
    testimonio:
      'La atencion de vigui telecomunicaciones me ha parecido espectacular, No he encontrado una igual',
  },
];

const mainBoxSx: SxProps = { display: { lg: 'none' } };

const responsiveSx: SxProps = {
  width: '100%',
  justifyContent: 'space-around',
  display: { xs: 'none', lg: 'flex' },
};

export const CarouselTestimonial = () => {
  const { data: testimonials } = useQuery(['testimonials'], async () => {
    try {
      return await supbaseLocalClient.fetchMembers();
    } catch (_error) {
      return defaultTestimonials;
    }
  });

  const cards = useMemo(
    () =>
      (testimonials?.length ? testimonials : defaultTestimonials).map(
        (testimonial) => (
          <Box
            key={testimonial.name}
            sx={{ display: 'flex', justifyContent: 'center', height: 'auto' }}
          >
            <CardTestimonial
              key={testimonial.name}
              img={
                <img
                  className={styles.testimonial__img}
                  src={testimonial.img}
                  alt={`${testimonial.name} photo`}
                />
              }
              main={
                <>
                  <Typography variant='h5' className={styles.testimonial__name}>
                    {testimonial.name}
                  </Typography>
                  <p>{testimonial.servicio}</p>
                </>
              }
              secondary={
                <p className={styles.testimonial__text}>
                  {testimonial.testimonio}
                </p>
              }
            />
          </Box>
        ),
      ),
    [testimonials],
  );

  return (
    <>
      <Box sx={mainBoxSx}>
        <Carousel autoPlay={false}>{cards}</Carousel>
      </Box>
      <Box sx={responsiveSx}>
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              marginTop: index % 2 === 0 ? '4rem' : undefined,
              marginBottom: '4rem  ',
            }}
          >
            {card}
          </Box>
        ))}
      </Box>
    </>
  );
};
