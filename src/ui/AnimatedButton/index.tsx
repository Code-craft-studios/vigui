'use client';

import styles from './styles.module.css';
import {HTMLProps} from 'react'

interface AnimatedButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string
};

const AnimatedButton = ({ className, children, ...buttonProps }: AnimatedButtonProps) => {
  return (
    <button {...buttonProps} type='button' className={`${styles.button} ${className}`}>{ children }</button>
  );
};
export default AnimatedButton;
