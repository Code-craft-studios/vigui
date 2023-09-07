import { Box, Container, Typography } from '@mui/material';
import styles from './styles.module.css';
import CardPlan from '../CardPlan';
import { ITEMS_PLANS } from './data/itemsPlans';

const PlansInternet = () => {
  return (
    <Box
      component='section'
      className={styles.background}
      id={'section-planes'}
    >
      <Container className={styles.container}>
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
        <div className={styles.itemsContainer}>
          {ITEMS_PLANS.map((item) => (
            <CardPlan
              key={item.title}
              price={item.price}
              items={item.items}
              title={item.title}
              subtitle='De 20 a 500 Mbps'
              variant='primary'
            />
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default PlansInternet;
