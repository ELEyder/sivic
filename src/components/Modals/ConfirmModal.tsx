import { useNavigate } from "react-router-dom";
import ButtonModal from "../Buttons/ButtonModal";
import Check from "../Icons/Check";
import DefaultModal from "./DefaultModal";
import styles from "./ConfirmModal.module.css";

const ConfirmModal = ({ openModal, setOpenModal, message = "Cambios aplicados correctamente"}: any) => {
  const navigate = useNavigate();

  return (
    <DefaultModal open={openModal} setOpen={setOpenModal} width={"628px"}>
      <div className={styles.modalContainer}>
        <Check />
        <h1>{message}</h1>
        <div className={styles.modalFooter}>
          <ButtonModal type={"secondary"} onClick={() => setOpenModal(false)}>
            Cerrar
          </ButtonModal>
          <ButtonModal onClick={() => navigate(-1)}>
            Regresar a la configuración
          </ButtonModal>
        </div>
      </div>
    </DefaultModal>
  );
};

export default ConfirmModal;
