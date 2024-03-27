import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { TrainingProps } from "@/interfaces/training";
import Grid from "@mui/material/Grid";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import { TrainingInfoCard } from "../../../training-plans/styles";
import TrainingLevel from "./TrainingLevel";
import Link from "next/link";
import styled from "styled-components";

const ListContainer = styled.div`
  a {
    color: #ff4081;
    text-align: center;
    border: 1px solid #ff4081;
    padding: 5px 10px;
    transition: all 0.3s ease;
    &:hover {
      border: 1px solid #2D9596;
      color: #2D9596;
    }
  }
`

const TrainingList = ({ trainings }: { trainings: TrainingProps[] }) => {
  return (
    <ListContainer>
    <Grid container spacing={2}>
      {trainings.map((training: TrainingProps, index: number) => (
        <Grid key={index} item xs={12} md={4}>
          <Card key={training.id} style={{ marginBottom: "20px" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                <SportsMartialArtsIcon
                  style={{ fontSize: 50, color: "#ff4081" }}
                />
                {training.name}
              </Typography>
              <TrainingInfoCard>
                <p>
                  Time: <span>{training.duration} miniutes</span>
                </p>
              </TrainingInfoCard>
              <TrainingLevel level={training.level} />
              <Link
                href="/training-plans/available/[trainingId]"
                as={`/training-plans/available/${training.id}`}
              >
                View
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </ListContainer>
  );
};

export default TrainingList;
