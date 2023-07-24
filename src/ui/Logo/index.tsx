import styles from './styles.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={"/logo.webp"} alt={"VIGUI"} />
    </div>
  );
};

export default Logo;
