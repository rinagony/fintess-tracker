'use client'
import Container from "@mui/material/Container";
import ProjectCard from "@/app/_components/Projects"
import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GET_EXERCISES } from '@/queries/exerciseQueries';
import {GET_TRAINING_PLANS} from '@/queries/trainingQueries';
import Spinner from "@/app/_components/Spinner"
import Alert from "@/app/_components/Alert"
import { Title } from "@/shared";

export default function Projects() {
  const { loading: loadingExercises, error: errorExercises, data: exercisesData } = useQuery(GET_EXERCISES);
  const { loading: loadingTraining, error: errorTraining, data: trainingData } = useQuery(GET_TRAINING_PLANS);

console.log(exercisesData, 'exercisesData', trainingData,'trainingData')

  if (loadingExercises || loadingTraining) return <Spinner />;
  if (errorTraining) return <Alert message={errorTraining.message} />;
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Title>Training plans</Title>
    </Container>
  )
}
