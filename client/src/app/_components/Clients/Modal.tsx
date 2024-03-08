import { useState } from "react";
import { useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { ClientDataProps } from "@/interfaces/client";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Form = styled.form`
  display: flex;
  margin-top: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.5rem;
`;

const textFieldStyle = { width: "100%", mb: 3 };

interface ModalClientProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onCreate: (fields: ClientDataProps) => void;
}

function ModalClient({ open, setOpen, onCreate }: ModalClientProps) {
  const handleClose = () => setOpen(false);
  const [fields, setFields] = useState<ClientDataProps>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (field: string, value: string) => {
    setFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  onCreate(fields)
  handleClose()

}
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          color="primary"
          variant="h5"
          component="h1"
        >
          Add Client
        </Typography>
        <Form onSubmit={handleOnSubmit}>
          <TextField
            sx={textFieldStyle}
            id="name"
            value={fields.name}
            onChange={(e) => handleChange("name", e.target.value)}
            label="Name"
            variant="standard"
          />
          <TextField
            type="email"
            sx={textFieldStyle}
            value={fields.email}
            onChange={(e) => handleChange("email", e.target.value)}
            id="email"
            label="Email"
            variant="standard"
          />
          <TextField
            type="number"
            sx={textFieldStyle}
            value={fields.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            id="phone"
            label="Phone"
            variant="standard"
          />
          <ActionsWrapper>
            <Button variant="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              disabled={
                !fields.phone?.length ||
                !fields.email?.length ||
                !fields.name?.length
              }
              variant="contained"
              type="submit"
            >
              Add client
            </Button>
          </ActionsWrapper>
        </Form>
      </Box>
    </Modal>
  );
}

export default ModalClient;
