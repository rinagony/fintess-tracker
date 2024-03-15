import { Exercise } from "@/interfaces/exercise";
import { ExerciseTrainingProps } from "@/interfaces/training";
import React from "react";
import styled from "styled-components";

const ExerciseItem = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;
const ExerciseName = styled.h4`
  color: #ff4081;
  font-size: 1.5rem;
`;
const Paragraph = styled.p`
margin: 1rem 0;
  color: #626262;
  font-size: 0.9rem;
`;

const ExerciseData = styled.span`
  color: #000;
  margin-left: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
`

interface ExercisesListProps {
  exercises: Exercise[];
  trainingExercises: ExerciseTrainingProps[];
}

export default function ExercisesList({
  exercises,
  trainingExercises,
}: ExercisesListProps) {
  return (
    <div>
      {trainingExercises.map((exercise, index) => {
        const currentExercise: Exercise | undefined = exercises.find(
          (item) => item.id === exercise.exerciseUuid
        );
        return (
          <ExerciseItem key={index}>
            <ExerciseName>
              {index + 1}: {currentExercise?.exercise_name}
            </ExerciseName>
            <Paragraph>How to do: <ExerciseData>{currentExercise?.description}</ExerciseData></Paragraph>
            <Paragraph>Number of sets: <ExerciseData>{exercise.sets}</ExerciseData></Paragraph>
            <Paragraph>Number of repetitions: <ExerciseData>{exercise.repetitions}</ExerciseData></Paragraph>
          </ExerciseItem>
        );
      })}
    </div>
  );
}
