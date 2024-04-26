import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { TrainingProps } from "@/interfaces/training";
import Grid from "@mui/material/Grid";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import { TrainingInfoCard } from "../../../my-workouts/styles";
import TrainingLevel from "./TrainingLevel";
import Link from "next/link";
import styled from "styled-components";
import colors from "@/shared/colors";

const ListContainer = styled.div`
  a {
    color: ${colors.primary};
    text-align: center;
    border: 1px solid ${colors.primary};
    padding: 5px 10px;
    transition: all 0.3s ease;
    &:hover {
      border: 1px solid ${colors.primary};
      color: ${colors.primary};
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
                  style={{ fontSize: 50, color: colors.primary }}
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
                href="/available-plans/[trainingId]"
                as={`/available-plans/${training.id}`}
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
