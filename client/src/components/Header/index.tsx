import React from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2rem;
  margin-left: 1rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const appBarStyled = { backgroundColor: "primary", padding: "1rem 0" };

function Header() {
  return (
    <AppBar position="static" sx={appBarStyled}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <LogoWrapper>
              <Image
                src="/logo.png"
                alt="Example Image"
                width={60}
                height={60}
              />

              <Title>OnTrack</Title>
            </LogoWrapper>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
