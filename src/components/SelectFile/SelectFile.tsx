import styles from "./SelectFile.module.css";

interface SelectFileProps {
  name?: string;
  accept?: string;
  onFileChange?: (key: string, file: File) => void;
}

const SelectFile = ({ name = '', accept= "image/*", onFileChange = () => {} }: SelectFileProps) => {
  return (
    <div className={styles.customFile}>
      <label htmlFor={name}>Seleccione un archivo</label>
      <input
        type="file"
        accept={accept}
        id={name}
        name={name}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            console.log("Archivo seleccionado:", name);
            onFileChange(name, file)
          }
        }}
      />
      <span className={styles.fileIcon}>📄</span>
    </div>
  );
};

export default SelectFile;
