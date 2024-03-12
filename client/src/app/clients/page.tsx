'use client'
import Clients from '@/app/_components/Clients'
import { Title } from '@/shared'
import Container from "@mui/material/Container";

export default function ClientsPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Title>Clients</Title>
      <Clients />
    </Container>     
  )
}
