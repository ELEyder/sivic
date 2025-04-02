import { Modal } from "antd";

const DefaultModal = ({ children, open, width = "100%" }: any) => {
  return (
    <Modal
      open={open}
      closable={false}
      footer={null}
      width={width}
       >
      {children}
    </Modal>
  );
};
export default DefaultModal;
