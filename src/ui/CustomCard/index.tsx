'use client';

import React, { ReactNode, useState } from 'react';
import styles from './styles.module.css';

type CustomCardProps = {
  headerContent: ReactNode;
  bodyContent: ReactNode;
  className?: string;
  color: string;
  onMouseEnter: React.MouseEventHandler<HTMLDivElement> | undefined;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const CustomCard = ({ headerContent, bodyContent, className, color, onMouseEnter, onMouseLeave }: CustomCardProps) => {

  return (
    <div className={`${styles.card} ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.header}>
        { headerContent }
      </div>
      <div className={styles.body} style={{ backgroundColor: color}}>
        { bodyContent }
      </div>
    </div>
  );
};
export default CustomCard;
