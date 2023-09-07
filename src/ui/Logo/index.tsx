import styles from './styles.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={'./logo.svg'} alt={'VIGUI'} />
    </div>
  );
};

export default Logo;
