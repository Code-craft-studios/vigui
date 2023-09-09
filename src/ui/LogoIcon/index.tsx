import styles from './style.module.css';

const LogoIcon = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={'./check.png'} alt={'VIGUI icon'} />
    </div>
  );
};

export default LogoIcon;
