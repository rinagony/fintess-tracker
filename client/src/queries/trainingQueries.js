import { gql } from '@apollo/client';

const GET_TRAINING_PLANS = gql`
  query getTrainings {
    trainings {
      id
      name
      description
    }
  }
`;

export { GET_TRAINING_PLANS };