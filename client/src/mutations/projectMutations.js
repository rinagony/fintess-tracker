import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation addProject($name: String!, $description: String!, $status: ProjectStatus!, $clientId: ID!) {
    addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
      id
      name
      description
      status
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

const UPDATE_PROJECT = gql`
mutation updateProject($name: String!, $description: String!, $status: ProjectStatusUpdate!, $clientId: ID!, $id: ID!) {
  updateProject(name: $name, description: $description, status: $status, clientId: $clientId, id: $id) {
    id
    name
    description
    status
  }
}
`;

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT}