import styles from './styles.module.css';

type AnimatedButtonProps = {
  title: string;
  className?: string;
};

const AnimatedButton = ({ title, className }: AnimatedButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`}>{ title }</button>
  );
};
export default AnimatedButton;
