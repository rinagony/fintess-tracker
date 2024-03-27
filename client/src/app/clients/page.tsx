"use client"
import Clients from '@/app/_components/Clients'
import { GET_CLIENTS } from '@/queries/clientQueries';
import { Title } from '@/shared'
import { useQuery } from '@apollo/client';
import Container from "@mui/material/Container";

export default function ClientsPage() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Title>Clients</Title>
      <Clients loading={loading} error={error} data={data} />
    </Container>     
  )
}
