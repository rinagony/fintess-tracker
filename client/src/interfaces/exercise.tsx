interface Exercise {
  id: string;
  exercise_name: string;
  muscle_group: string;
  type: string;
  description: string;
  equipment: string[];
  difficulty_level: string;
}

export type { Exercise };