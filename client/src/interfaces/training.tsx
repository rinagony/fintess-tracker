interface ExerciseTrainingProps {
  id: string;
  sets: number;
  repetitions: number;
  exerciseUuid: string;
}

interface TrainingProps {
  id: string;
  name: string;
  description: string;
  exercises: ExerciseTrainingProps[];
  level: string;
  duration: string;
}

export type { TrainingProps, ExerciseTrainingProps };