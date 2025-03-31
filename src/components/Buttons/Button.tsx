import styles from "./Button.module.css";

const Button = ({ children, onClick, type } : any) => {
  if (type === "secondary") {
    return <button className={styles.buttonSecondary} onClick={onClick}>{children}</button>;
  } else {
    return <button className={styles.button} onClick={onClick}>{children}</button>;
  }
}

export default Button;