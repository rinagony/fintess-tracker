import { useMutation } from "@apollo/client";
import TableComponent from "./Table";
import { GET_CLIENTS } from "@/queries/clientQueries";
import { ADD_CLIENT, DELETE_CLIENT } from "@/mutations/clientMutations";
import Alert from "../Alert";
import { ClientDataProps, ClientProps } from "@/interfaces/client";
import Button from "@mui/material/Button";
import { useState } from "react";
import ModalClient from "./Modal";
import Person3Icon from "@mui/icons-material/Person3";
import Spinner from "@/app/_components/Spinner"

interface ClientsProps { 
  loading: boolean; 
  error: any; 
  data: { clients: ClientProps[] }; 
}

function Clients({loading, error, data}: ClientsProps) {
  const columns = ["ID", "Name", "Email", "Phone", "Remove"];

  const [deleteClient] = useMutation(DELETE_CLIENT);
  const [addClient] = useMutation(ADD_CLIENT);

  const [openModal, setOpenModal] = useState(false);

  const handleOnDelete = (id: string) => {
    deleteClient({
      variables: { id },
      update: (cache, { data }) => {
        const deleteClientData = data?.deleteClient;

        if (deleteClientData) {
          const { clients }: { clients: ClientProps[] } = cache.readQuery({
            query: GET_CLIENTS,
          }) ?? { clients: [] };

          cache.writeQuery({
            query: GET_CLIENTS,
            data: {
              clients: clients.filter(
                (client) => client.id !== deleteClientData.id
              ),
            },
          });
        }
      },
    });
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const onClientCreate = (fields: ClientDataProps) => {
    addClient({
      variables: fields,
      update(cache, { data: { addClient } }) {
        const { clients }: { clients: ClientProps[] } = cache.readQuery({
          query: GET_CLIENTS,
        }) ?? { clients: [] };
        cache.writeQuery({
          query: GET_CLIENTS,
          data: { clients: [...clients, addClient] },
        });
      },
    });
  };

  if (loading) return <Spinner />;
  if (error) return <Alert message={error.message} />;
  return (
    <div>
      <Button sx={{ mb: 4 }} onClick={handleOpenModal} variant="contained">
        <Person3Icon sx={{ mr: 1 }} />
        Add client
      </Button>
      <ModalClient
        open={openModal}
        setOpen={setOpenModal}
        onCreate={onClientCreate}
      />
      <TableComponent
        rows={data.clients}
        columns={columns}
        onDelete={handleOnDelete}
      />
    </div>
  );
}

export default Clients;
