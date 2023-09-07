'use client';

import { Box, Container, Typography } from '@mui/material';
import styles from './styles.module.css';
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';
import CardPlan from '../CardPlan';

const PlansTv = () => {
  return (
    <Box
      component='section'
      className={styles.background}
      id={'section-planes'}
    >
      <Container>
        <Typography
          variant='h3'
          className={styles.title}
          component='h1'
          color='#fff'
          pt={3}
        >
          Servicios
        </Typography>
        <Typography
          mb={5}
          variant='h4'
          className={styles.subtitle}
          component='h2'
          color='#ffffff'
        >
          Internet Hogar
        </Typography>
        <div className={styles.container}>
          <CardPlan
            variant='secondary'
            price='$40.000'
            title='+110 canales'
            subtitle='DIgitales'
            items={['Dos puntos de', 'televisión', '+ Canales exclusivos']}
          />

          <div className={styles.containerVideo}>
            <LiteYoutubeEmbed
              id='9JzmrdYx3c4'
              mobileResolution={'hqdefault'}
              desktopResolution={'sddefault'}
              lazyImage={true}
              imageAltText='La empresa Vigui Telecomunicaciones ofrece servicio de internet en El Santiario.'
              iframeTitle='La empresa Vigui Telecomunicaciones ofrece servicio de internet en El Santiario.'
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};
export default PlansTv;
