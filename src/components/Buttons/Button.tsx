import styles from "./Button.module.css";

const Button = ({ children, onClick } : any) => {
  return <button className={styles.button} onClick={onClick}>{children}</button>;
}

export default Button;