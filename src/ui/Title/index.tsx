import styles from './styles.module.css';

type Props = {
  children: string;
};

const Title = ({ children }: Props) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
