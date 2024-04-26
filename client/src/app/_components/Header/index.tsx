import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Authentication from "../Authentication";
import { appBarStyled, LogoWrapper, Title } from "./styles";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SummaryProfile from "../SummaryProfile";
import { useSession } from "next-auth/react";
import styled from "styled-components";
import MobileMenu from "../MobileMenu";
import Logo from "../Logo";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
`;

const HeaderAdditionalInfo = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }

  @media (min-width: 1001px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const HeaderMobileMenu = styled.div`
  @media (max-width: 1000px) {
    display: block;
  }

  @media (min-width: 1001px) {
    display: none;
  }
`;

function Header() {
  const { data: session, status }: any = useSession();

  if (status === "loading") return null;
  return (
    <AppBar position="static" sx={appBarStyled}>
      <Container>
        <Link href="/">
          <LogoWrapper>
<Logo />
            <Title>HabitsPro</Title>
          </LogoWrapper>
        </Link>
        <HeaderAdditionalInfo>
          {session?.user ? <SummaryProfile user={session.user} /> : null}
          <Authentication />
        </HeaderAdditionalInfo>
        <HeaderMobileMenu>
          <MobileMenu />
        </HeaderMobileMenu>
      </Container>
    </AppBar>
  );
}

export default Header;
