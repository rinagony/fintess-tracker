import React from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Authentication from "../Authentication";
import { appBarStyled, LogoWrapper, Title } from "./styles";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function Header() {
  return (
    <AppBar position="static" sx={appBarStyled}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <LogoWrapper>
           <FitnessCenterIcon style={{transform: 'scale(1.8)'}}/>
              <Title>Fitness Tracker</Title>
            </LogoWrapper>
          </Link>
          <Authentication />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
