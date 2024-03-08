import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { ClientProps } from "@/interfaces/client";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { ProjectDataProps, ProjectExistingProps } from "@/interfaces/project";
import { GET_CLIENTS } from "@/queries/clientQueries";
import { ProjectStatusEnum } from "@/enums";

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

interface ModalProjectProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onCreate: (fields: ProjectDataProps, selectedProjectId?: string) => void;
  selectedProject?: ProjectExistingProps | null;
}

function ModalProject({
  open,
  setOpen,
  onCreate,
  selectedProject,
}: ModalProjectProps) {
  const handleClose = () => setOpen(false);
  const { data } = useQuery(GET_CLIENTS);
  const [fields, setFields] = useState<ProjectDataProps>({
    name: "",
    description: "",
    status: "new",
    clientId: "",
  });

  useEffect(() => {
    if (selectedProject) {
      const status = (() => {
        switch (selectedProject.status) {
          case ProjectStatusEnum.NEW:
            return "new";
          case ProjectStatusEnum.PROGRESS:
            return "progress";
          case ProjectStatusEnum.COMPLETED:
            return "completed";
          default:
            return "new";
        }
      })();
      setFields({
        name: selectedProject.name,
        description: selectedProject.description,
        status: status,
        clientId: selectedProject.client.id,
      });
    }
  }, [selectedProject]);

  const handleChange = (field: string, value: string) => {
    setFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(selectedProject) {
      onCreate(fields, selectedProject.id);
    } else {
      onCreate(fields);
    }
    handleClose();
  };
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
          {selectedProject ? 'Update project' : 'Add project'}
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
            sx={textFieldStyle}
            value={fields.description}
            onChange={(e) => handleChange("description", e.target.value)}
            id="description"
            label="description"
            variant="standard"
          />
          <Select
            sx={textFieldStyle}
            value={fields.status}
            label="status"
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <MenuItem value={"new"}>Not Started</MenuItem>
            <MenuItem value={"progress"}>In Progress</MenuItem>
            <MenuItem value={"completed"}>Completed</MenuItem>
          </Select>
          <Select
            sx={textFieldStyle}
            value={fields.clientId}
            label="clientId"
            disabled={Boolean(selectedProject)}
            onChange={(e) => handleChange("clientId", e.target.value)}
          >
            {data?.clients &&
              data.clients.map((client: ClientProps) => (
                <MenuItem key={client.id} value={client.id}>
                  {client.name}
                </MenuItem>
              ))}
          </Select>
          <ActionsWrapper>
            <Button variant="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              disabled={
                !fields.name?.length ||
                !fields.description?.length ||
                !fields.status?.length ||
                !fields.clientId?.length
              }
              variant="contained"
              type="submit"
            >
              {selectedProject ? 'Update project' : 'Add project'}
            </Button>
          </ActionsWrapper>
        </Form>
      </Box>
    </Modal>
  );
}

export default ModalProject;
