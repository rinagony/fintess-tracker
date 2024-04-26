import Modal from "@mui/material/Modal";
import styled from "styled-components";
import Actions from "./Actions";
import { ModalTitle } from "@/shared";

const Form = styled.form`
  display: flex;
  margin-top: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const FormModalWrapper = styled.div`
  max-width: 50rem;
  background-color: #fff;
  max-height: 90rem;
  overflow-y: auto;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 16px;
`;

interface FormModalProps {
  open: boolean;
  handleClose: () => void;
  confirmText: string;
  isDisabledConfirm: boolean;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  title: string;
}

function FormModal({
  open,
  handleClose,
  confirmText,
  title,
  isDisabledConfirm,
  handleOnSubmit,
  children,
}: FormModalProps) {
  return (
    <Modal
      open={open}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FormModalWrapper>
        <ModalTitle>{title}</ModalTitle>
        <Form onSubmit={handleOnSubmit}>
          {children}
          <Actions
            handleCancel={handleClose}
            isDisabledConfirm={isDisabledConfirm}
            confirmText={confirmText}
          />
        </Form>
      </FormModalWrapper>
    </Modal>
  );
}

export default FormModal;
