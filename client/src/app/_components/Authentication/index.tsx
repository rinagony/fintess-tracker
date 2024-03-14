import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import styled from "styled-components";
import ButtonPrimary from "../ButtonPrimary";

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
        <ButtonPrimary onClick={() => signOut()} text="Sign Out" />
      ) : (
        <ButtonPrimary onClick={() => signIn("google")} text="Sign in" />
      )}
    </Container>
  );
}
