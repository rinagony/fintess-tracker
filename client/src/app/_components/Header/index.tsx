import React from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import styled from "styled-components";
import Authentication from "../Authentication";

const Title = styled.h2`
  font-size: 2rem;
  margin-left: 1rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Nav = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 0;
  margin-right: 0;
  margin-left: 1rem;
`
const NavItem = styled.div`
  margin-right: 1rem;
`
const appBarStyled = { backgroundColor: "primary", padding: "1rem 0" };

function Header() {
  const menuList = [
    {
      link: "/",
      title: "Clients"
    },
    {
      link: "/projects",
      title: "Projects"
    }
  ]
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
          <Nav>
            {menuList.map((item, index) => (
              <NavItem key={index}>
              <Link href={item.link}>{item.title}</Link>
            </NavItem>
            ))}
          </Nav>
          <Authentication />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
