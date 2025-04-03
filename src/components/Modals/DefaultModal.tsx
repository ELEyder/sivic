import { Modal } from "antd";

const DefaultModal = ({ children, open, setOpen, width = "100%" }: any) => {
  return (
    <Modal
      open={open}
      closable={false}
      footer={null}
      width={width}
      onCancel={() => setOpen(false)}
      centered 
       >
      {children}
    </Modal>
  );
};
export default DefaultModal;
