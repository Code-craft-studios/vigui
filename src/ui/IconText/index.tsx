import { Typography } from "@mui/material";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  alt: string;
  src: string;
};

const IconText = ({ children, alt, src }: Props) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} />
      <Typography>{ children }</Typography>
    </div>
  )
};
export default IconText;
