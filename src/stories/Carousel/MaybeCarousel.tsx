'use client';

import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

import Carousel from 'react-material-ui-carousel';

const content = Array.from({ length: 3 }).map((_, index) => (
  <div key={Math.random()}>Children {index}</div>
));

export const CustomCarousel = ({ children = content }: PropsWithChildren) => (
  <Box component='section' sx={{ textAlign: 'center' }}>
    <Carousel
      sx={{
        display: {
          md: 'none',
        },
      }}
    >
      {children}
    </Carousel>
    <Box
      sx={{
        display: {
          md: 'flex',
          xs: 'none',
        },
      }}
    >
      {children}
    </Box>
  </Box>
);
