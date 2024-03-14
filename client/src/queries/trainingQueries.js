import { gql } from '@apollo/client';

const GET_TRAINING_PLANS = gql`
  query getTrainings {
    trainings {
      id
      name
      description
      exercises
      duration
      level
    }
  }
`;


const GET_TRAINING = gql`
  query getTraining($id: ID!) {
    training(id: $id) {
      id
      name
      description
      exercises
      duration
      level
    }
  }
`
export { GET_TRAINING_PLANS, GET_TRAINING };