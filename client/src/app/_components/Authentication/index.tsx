import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default function Authentication() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;
  return (
    <Container>
      {session ? (
        <Button color="secondary" variant="contained" onClick={() => signOut()}>
          Sign Out
        </Button>
      ) : (
        <Button
          color="secondary"
          variant="contained"
          onClick={() => signIn("google")}
        >
          Sign in
        </Button>
      )}
    </Container>
  );
}
