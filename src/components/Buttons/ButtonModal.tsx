import styles from "./ButtonModal.module.css";

const ButtonModal = ({ children, onClick, type, className } : any) => {
  if (type === "secondary") {
    return <button className={`${styles.buttonSecondary} ${className}`} onClick={onClick}>{children}</button>;
  } else {
    return <button className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>;
  }
}

export default ButtonModal;