import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <img src="./footer/1.png" alt="logo1" />
        <img src="./footer/2.png" alt="logo2" />
        <img src="./footer/3.png" alt="logo3" />
        <img src="./footer/4.png" alt="logo4" />
      </div>
      <p>© 2025 Socios en Salud Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
