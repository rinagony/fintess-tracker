import { Exercise } from "@/interfaces/exercise";
import React, { useEffect, useMemo, useState } from "react";
import SelectorComponent from "../Selector";
import Input from "../Input";
import Grid from "@mui/material/Grid";
import { ExerciseTrainingProps } from "@/interfaces/training";
import styled from "styled-components";
import colors from "@/shared/colors";

interface SelectExerciseProps {
  exercises: Exercise[];
  onAddExercise: (exercise: ExerciseTrainingProps) => void;
  handleAddNew: () => void;
}

const AddNewButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 500;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const wrapperAddStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "2rem"
};

export default function SelectExercise({
  exercises,
  onAddExercise,
  handleAddNew,
}: SelectExerciseProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const [sets, setSets] = useState("");
  const [repetitions, setRepetitions] = useState("");

  const [disableAdd, setDisableAdd] = useState(true);

  useEffect(() => {
    if (selectedOption !== "" || sets !== "" || repetitions !== "") {
      const setsAsNumber = Number(sets);
      const repetitionsAsNumber = Number(repetitions);
      onAddExercise({
        sets: setsAsNumber,
        repetitions: repetitionsAsNumber,
        exerciseUuid: selectedOption,
      });
      setDisableAdd(false);
    }
  }, [selectedOption, sets, repetitions]);

  const options = useMemo(() => {
    return exercises.map((exercise, index) => ({
      value: exercise.id.toString(),
      label: exercise.exercise_name,
    }));
  }, [exercises]);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <SelectorComponent
            options={options}
            value={selectedOption}
            onChange={(v) => setSelectedOption(v)}
            label="Select an exercise:"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Input
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            type="number"
            label="Number of sets:"
            disabled={false}
            errorMessage={null}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            value={repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
            type="number"
            label="Number of repetitions:"
            disabled={false}
            errorMessage={null}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={wrapperAddStyles}
        >
          <AddNewButton onClick={handleAddNew} disabled={disableAdd}>
            + Add
          </AddNewButton>
        </Grid>
      </Grid>
    </div>
  );
}
