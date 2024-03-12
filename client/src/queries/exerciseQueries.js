import { gql } from '@apollo/client';

const GET_EXERCISES = gql`
  query getExercises {
    exercises {
      id
      exercise_name
      muscle_group
      type
      description
      equipment
      difficulty_level
    }
  }
`;

export { GET_EXERCISES };