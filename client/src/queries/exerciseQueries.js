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
      image
    }
  }
`;

const GET_EXERCISE = gql`
  query getExercise($id: ID!) {
    exercise(id: $id) {
      id
      exercise_name
      muscle_group
      type
      description
      equipment
      difficulty_level
      mage
    }
  }
`;

export { GET_EXERCISES, GET_EXERCISE };