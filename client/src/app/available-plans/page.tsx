'use client'
import Container from "@mui/material/Container";
import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import {GET_TRAINING_PLANS} from '@/queries/trainingQueries';
import Spinner from "@/app/_components/Spinner"
import Alert from "@/app/_components/Alert"
import { PageHeaderWrapper, Title } from "@/shared";
import TrainingList from "../_components/Alert/TrainingList";
import ButtonPrimary from "../_components/ButtonPrimary";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import NewWorkout from "../_components/NewWorkout";

export default function Workouts() {
  const { loading: loadingTraining, error: errorTraining, data: trainingData } = useQuery(GET_TRAINING_PLANS);

  const [openModal, setOpenModal] = useState(false);

  if (loadingTraining) return <Spinner />;
  if (errorTraining) return <Alert message={errorTraining.message} />;
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Breadcrumbs />
      <PageHeaderWrapper>
      <Title>Workouts available:</Title>
      <ButtonPrimary text="Create new workout" onClick={() => setOpenModal(true)}/>
      </PageHeaderWrapper>
      <TrainingList trainings={trainingData.trainings} />
      <NewWorkout open={openModal} setOpen={setOpenModal} />
    </Container>
  )
}
