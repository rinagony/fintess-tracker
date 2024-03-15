import { gql } from '@apollo/client';

const GET_TRAINING_PLANS = gql`
  query getTrainings {
    trainings {
      id
      name
      description
      duration
      level
      exercises {
        id
        sets
        repetitions
        exerciseUuid
      }
    }
  }
`;

const GET_TRAINING = gql`
  query getTraining($id: ID!) {
    training(id: $id) {
      id
      name
      description
      duration
      level
      exercises {
        id
        sets
        repetitions
        exerciseUuid
      }
    }
  }
`;

export { GET_TRAINING_PLANS, GET_TRAINING };