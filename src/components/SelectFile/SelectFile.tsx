import styles from "./SelectFile.module.css";

interface SelectFileProps {
  name?: string;
}

const SelectFile = ({ name }: SelectFileProps) => {
  return (
    <div className={styles.customFile}>
      <label htmlFor="file-upload">Seleccione un archivo</label>
      <input
        type="file"
        id="file-upload"
        name={name}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            console.log("Archivo seleccionado:", file.name);
          }
        }}
      />
      <span className={styles.fileIcon}>📄</span>
    </div>
  );
};

export default SelectFile;
