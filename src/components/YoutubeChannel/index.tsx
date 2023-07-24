import Section from '@/ui/Section';
import styles from './styles.module.css';
import { Box, Typography } from '@mui/material';

const YoutubeChannel = () => {
  return (
    <Section title='Conoce nuestro canal de Youtube' bg='#dedede'>
      <Box component='div' className={styles.container}>
        <Typography component='p'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          facere?
        </Typography>
        <Box
          component='iframe'
          className={styles.video}
          src='https://www.youtube.com/embed/9JzmrdYx3c4'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
      </Box>
    </Section>
  );
};

export default YoutubeChannel;
