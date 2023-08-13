'use client';

import { MinimalCard } from '@/containers/MinimalCard';
import { Box, SxProps, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import styles from './styles.module.css';
import { supbaseLocalClient } from '@/lib/modules';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const defaultMembers = [
  {
    img: '/images/vigui-equipo-atencion-al-cliente-desktop.webp',
    name: 'Victor Alonso',
    position: 'Representante Legal',
  },
  {
    img: '/images/vigui-equipo-fibra-optica-desktop.webp',
    name: 'Dora Hoyos',
    position: 'Gerente Administrativa',
  },
  {
    img: '/images/vigui-equipo-internet-dedicado-desktop.webp',
    name: 'Valentina Suarez',
    position: 'Auxiliar Administrativa',
  },
  {
    img: '/images/vigui-equipo-internet-sin-caidas-desktop.webp',
    name: 'Gerardo Ramirez',
    position: 'Ing. Sistemas y jefe de técnicos',
  },
];

const mainBoxSx: SxProps = { height: '250px', display: { lg: 'none' } };

const responsiveSx: SxProps = {
  width: '100vw',
  height: 200,
  justifyContent: 'space-around',
  display: { xs: 'none', lg: 'flex' },
};

function Carrousel() {
  const { data: members } = useQuery(['members'], async () => {
    try {
      return await supbaseLocalClient.fetchMembers();
    } catch (_error) {
      return defaultMembers;
    }
  });

  const cards = useMemo(
    () =>
      (members?.length ? members : defaultMembers).map((member) => (
        <Box key={member.name} className={styles.member}>
          <MinimalCard
            secondary={
              <p className={styles.member__position}>{member.position}</p>
            }
            main={
              <Typography variant='h5' className={styles.member__name}>
                {member.name}
              </Typography>
            }
            img={
              <img
                className={styles.member__img}
                src={member.img}
                alt={`${member.name} photo`}
              />
            }
          />
        </Box>
      )),
    [members],
  );

  return (
    <>
      <Box sx={mainBoxSx}>
        <Carousel autoPlay={false}>{cards}</Carousel>
      </Box>
      <Box sx={responsiveSx}>{cards}</Box>
    </>
  );
}

export default Carrousel;
