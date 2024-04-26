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
import ExercisesList from "@/app/_components/ExercisesList";
import TrainingLevel from "../../_components/Alert/TrainingList/TrainingLevel";
import { TrainingInfoCard } from "../../my-workouts/styles";
import Breadcrumbs from "@/app/_components/Breadcrumbs";

const TrainingItemWrapper = styled.div`
  p {
    color: #000;
  }
  margin-bottom: 2rem;
`;
const Description = styled.p`
  color: #000;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const TrainingItem = ({ params }: { params: { trainingId: string } }) => {
  const { trainingId } = params;
  const { loading, error, data } = useQuery(GET_TRAINING, {
    variables: { id: trainingId },
  });

  const { data: exercisesData } = useQuery(GET_EXERCISES);

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData.exercises);
    }
  }, [exercisesData]);

  if (loading && !data) return <Spinner />;
  if (error) return <Alert message={error.message} />;
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Breadcrumbs pageName={data.training.name} />
      <PageHeaderWrapper>
        <Title>{data.training.name}</Title>
        <ButtonPrimary text="Add workout" onClick={() => {}} />
      </PageHeaderWrapper>
      <TrainingItemWrapper>
        <Description>{data.training.description}</Description>
        <TrainingLevel level={data.training.level} />
        <TrainingInfoCard>
          <p>
            Duration: <span>{data.training.duration} miniutes</span>
          </p>
        </TrainingInfoCard>
      </TrainingItemWrapper>
      <ExercisesList
        exercises={exercises}
        trainingExercises={data.training.exercises}
      />
    </Container>
  );
};

export default TrainingItem;
