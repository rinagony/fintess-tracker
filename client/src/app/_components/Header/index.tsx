import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Authentication from "../Authentication";
import { appBarStyled, LogoWrapper, Title } from "./styles";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Phrases from "../Phrases";
import SummaryProfile from "../SummaryProfile";
import { useSession } from "next-auth/react";

function Header() {
  const { data: session, status } = useSession();
  return (
    <AppBar position="static" sx={appBarStyled}>
      <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={2}>
              <Link href="/">
                <LogoWrapper>
                  <FitnessCenterIcon style={{ transform: "scale(1.8)" }} />
                  <Title>Fitness Tracker</Title>
                </LogoWrapper>
              </Link>
            </Grid>
            <Grid item xs={12} md={8}>
              <Phrases />
            </Grid>
            <Grid item xs={12} md={1}>
              <SummaryProfile user={session!.user}/>
            </Grid>
            <Grid item xs={12} md={1}>
              <Authentication />
            </Grid>
          </Grid>
      </Container>
    </AppBar>
  );
}

export default Header;
