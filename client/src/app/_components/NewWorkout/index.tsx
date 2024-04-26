import React, { useState } from "react";
import FormModal from "../FormModal";
import Input from "../Input";
import RangeSlider from "../Input/RangeSlider";
import Grid from "@mui/material/Grid";
import { WorkoutLevelEnum } from "@/enums";
import { useQuery } from "@apollo/client";
import { GET_EXERCISES } from "@/queries/exerciseQueries";
import { Exercise } from "@/interfaces/exercise";
import SelectExercise from "../SelectExercise";
import { ExerciseTrainingProps } from "@/interfaces/training";

export default function NewWorkout({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { data: exercisesData } = useQuery(GET_EXERCISES);
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState("0");
  const [level, setLevel] = useState<WorkoutLevelEnum>(
    WorkoutLevelEnum.INTERMEDIATE
  );
  const [trainingExercises, setTrainingExercises] = useState<
    ExerciseTrainingProps[]
  >([]);

  const handleChange = (value: number) => {
    if (value <= 33) {
      setLevel(WorkoutLevelEnum.BEGINNER);
    } else if (value <= 66) {
      setLevel(WorkoutLevelEnum.INTERMEDIATE);
    } else {
      setLevel(WorkoutLevelEnum.ADVANCED);
    }
  };

  const onAddExercise = (trainingExercise: ExerciseTrainingProps) => {
    setTrainingExercises([...trainingExercises, trainingExercise]);
  };

  const handleAddNewExerfcise = () => {
    console.log("add new exercise");
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit", workoutName, workoutDescription);
  };

  return (
    <FormModal
      handleClose={() => setOpen(false)}
      open={open}
      title="Create new workout"
      confirmText="Add workout"
      isDisabledConfirm={false}
      handleOnSubmit={handleOnSubmit}
    >
      <Grid spacing={3} container>
        <Grid item xs={12} md={6}>
          <Input
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            type="text"
            label="Workout name:"
            disabled={false}
            errorMessage={null}
          />
          <Input
            value={workoutDescription}
            textarea={true}
            onChange={(e) => setWorkoutDescription(e.target.value)}
            type="text"
            label="Workout description:"
            disabled={false}
            errorMessage={null}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RangeSlider
            label="Workout level:"
            level={level}
            onChange={handleChange}
          />
          <Input
            value={workoutDuration}
            onChange={(e) => setWorkoutDuration(e.target.value)}
            type="number"
            label="Workout duration in minutes:"
            disabled={false}
            errorMessage={null}
          />
        </Grid>
        <Grid item xs={12}>
           <SelectExercise
                onAddExercise={onAddExercise}
                exercises={exercisesData?.exercises as Exercise[]}
                handleAddNew={handleAddNewExerfcise}
              />
        </Grid>
      </Grid>
    </FormModal>
  );
}
