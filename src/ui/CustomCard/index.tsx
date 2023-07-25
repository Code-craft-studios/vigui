'use client';

import React, { ReactNode } from 'react';
import styles from './styles.module.css';

type CustomCardProps = {
  headerContent: ReactNode;
  bodyContent: ReactNode;
  className?: string;
};

const CustomCard = ({ headerContent, bodyContent, className }: CustomCardProps) => {

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.header}>
        { headerContent }
      </div>
      <div className={styles.body}>
        <div className={styles.hoverBg}></div>
        { bodyContent }
      </div>
    </div>
  );
};
export default CustomCard;
