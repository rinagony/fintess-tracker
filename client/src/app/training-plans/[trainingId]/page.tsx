"use client";

import Alert from "@/app/_components/Alert";
import Spinner from "@/app/_components/Spinner";
import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import styled from "styled-components";
import { GET_TRAINING } from "@/queries/trainingQueries";
import { PageHeaderWrapper, Title } from "@/shared";
import ButtonPrimary from "@/app/_components/ButtonPrimary";
import { GET_EXERCISES } from "@/queries/exerciseQueries";
import { useEffect, useState } from "react";

const TrainingItemWrapper = styled.div`
  p {
    color: #000;
  }
`;

const TrainingItem = ({ params }: { params: { trainingId: string } }) => {
  const { trainingId } = params;
  const { loading, error, data } = useQuery(GET_TRAINING, {
    variables: { id: trainingId },
  });

  const {data: exercisesData } = useQuery(GET_EXERCISES);

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData.exercises);
    }

  }, [exercisesData])

  if (loading) return <Spinner />;
  if (error) return <Alert message={error.message} />;
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <PageHeaderWrapper>
      <Title>{data.training.name}</Title>
      <ButtonPrimary text="Edit workout" onClick={() => {}} />
      </PageHeaderWrapper>
      <TrainingItemWrapper>
        <p>{data.training.description}</p>
      </TrainingItemWrapper>
    </Container>
  );
};

export default TrainingItem;
