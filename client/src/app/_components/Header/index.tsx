import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Authentication from "../Authentication";
import { appBarStyled, LogoWrapper, Title } from "./styles";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Phrases from "../Phrases";

function Header() {
  return (
    <AppBar position="static" sx={appBarStyled}>
      <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Link href="/">
                <LogoWrapper>
                  <FitnessCenterIcon style={{ transform: "scale(1.8)" }} />
                  <Title>Fitness Tracker</Title>
                </LogoWrapper>
              </Link>
            </Grid>
            <Grid item xs={12} md={7}>
              <Phrases />
            </Grid>
            <Grid item xs={12} md={2}>
              <Authentication />
            </Grid>
          </Grid>
      </Container>
    </AppBar>
  );
}

export default Header;
