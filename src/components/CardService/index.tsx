'use client';

import CustomCard from '../../ui/CustomCard';
import styles from './styles.module.css';
import AnimatedButton from '../../ui/AnimatedButton';
import { Typography } from '@mui/material';
import { useState } from 'react';

type CardServiceProps = {
  price: string;
  title: string;
  items: string[];
  color: string;
  hoverColor: string;
}

const CardService = ({price, title, items, color, hoverColor}: CardServiceProps) => {
  
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  }
  
  const handleMouseLeave = () => {
    setHovered(false);
  }

  const actualColor = isHovered ? hoverColor : color;

  return (
    <CustomCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.card} color={actualColor} headerContent={
      <>
        <Typography className={styles.price} sx={{color: actualColor }}>{ price }</Typography>
        <Typography className={styles.title}>{ title }</Typography>
      </>
    }
    bodyContent={
      <div className={styles.textBody}>
          <ul className={styles.list}>
            { items.map((item, index) =>
              <li key={index+item}>{ item }</li>
            )}
          </ul>
          <AnimatedButton className={styles.button}>Comprar</AnimatedButton>
        </div>
    } />
  );
};

export default CardService;
