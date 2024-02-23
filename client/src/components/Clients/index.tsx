import { gql, useMutation, useQuery } from "@apollo/client";
import TableComponent from "./Table";
import Container from "@mui/material/Container";
import { GET_CLIENTS } from "@/queries/clientQueries";
import { DELETE_CLIENT } from "@/mutations/clientMutations";
import Spinner from "@/components/Spinner";
import Alert from "../Alert";

function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const columns = ["ID", "Name", "Email", "Phone", "Remove"];
  const [deleteClient] = useMutation(DELETE_CLIENT);
  const handleOnDelete = (id: string) => {
    deleteClient({ variables: { id }, refetchQueries: [{query: GET_CLIENTS}] });
  };
  console.log(data, "data");
  if (loading) return <Spinner />;
  if (error) return <Alert message={error.message} />;
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <TableComponent
        rows={data.clients}
        columns={columns}
        onDelete={handleOnDelete}
      />
    </Container>
  );
}

export default Clients;
