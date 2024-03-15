'use client'
import Container from "@mui/material/Container";
import { useQuery } from '@apollo/client'
import React from 'react'
import {GET_TRAINING_PLANS} from '@/queries/trainingQueries';
import Spinner from "@/app/_components/Spinner"
import Alert from "@/app/_components/Alert"
import { PageHeaderWrapper, Title } from "@/shared";
import TrainingList from "../../_components/Alert/TrainingList";
import ButtonPrimary from "../../_components/ButtonPrimary";

export default function Workouts() {
  const { loading: loadingTraining, error: errorTraining, data: trainingData } = useQuery(GET_TRAINING_PLANS);

  if (loadingTraining) return <Spinner />;
  if (errorTraining) return <Alert message={errorTraining.message} />;
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <PageHeaderWrapper>
      <Title>Workouts availible:</Title>
      <ButtonPrimary text="Create new workout" onClick={() => {}} />
      </PageHeaderWrapper>
      <TrainingList trainings={trainingData.trainings} />
    </Container>
  )
}
