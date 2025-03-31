import styles from "./SelectFile.module.css";

const SelectFile = () => {
  return (
    <div className={styles.customFile}>
    <label htmlFor="file-upload">Seleccione un archivo</label>
    <input type="file" id="file-upload" />
    <span className={styles.fileIcon}>📄</span>
  </div>
  );
};

export default SelectFile