import { cva } from "class-variance-authority";
import styles from "./styles.module.css";

export const titleClasses = cva(styles.title, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary
    }
  }
})