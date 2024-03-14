import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { TrainingProps } from "@/interfaces/training";
import Grid from "@mui/material/Grid";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import { TrainingInfoCard } from "../styles";
import TrainingLevel from "./TrainingLevel";
import Link from "next/link";

const TrainingList = ({ trainings }: { trainings: TrainingProps[] }) => {
  return (
    <Grid container spacing={2}>
      {trainings.map((training: TrainingProps) => (
        <Grid item xs={12} md={4}>
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
                href="/training-plans/[trainingId]"
                as={`/training-plans/${training.id}`}
              >
                View
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TrainingList;
