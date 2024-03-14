//Mongoose models
const Project = require("../models/Project");
const Client = require("../models/Client");
const Exercise = require("../models/Exercise");
const Training = require("../models/Training");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLEnumType,
} = require("graphql");

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

const ExerciseType = new GraphQLObjectType({
  name: "Exercise",
  fields: () => ({
    id: { type: GraphQLID },
    exercise_name: { type: GraphQLString },
    muscle_group: { type: GraphQLString },
    type: { type: GraphQLString },
    description: { type: GraphQLString },
    equipment: { type: GraphQLList(GraphQLString) },
    difficulty_level: { type: GraphQLString },
  }),
});

const TrainingType = new GraphQLObjectType({
  name: "Training",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    exercises: { type: GraphQLList(GraphQLID) },
    duration: { type: GraphQLString },
    level: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
    exercises: {
      type: new GraphQLList(ExerciseType),
      resolve(parent, args) {
        return Exercise.find();
      },
    },
    exercise: {
      type: ExerciseType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Exercise.findById(args.id);
      },
    },
    trainings: {
      type: new GraphQLList(TrainingType),
      resolve(parent, args) {
        return Training.find();
      },
    },
    training: {
      type: TrainingType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Training.findById(args.id);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });

        return client.save();
      },
    },

    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) => {
        return Client.findByIdAndDelete(args.id);
      },
    },

    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        clientId: { type: GraphQLID },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        });

        return project.save(); //Save to the db
      },
    },
    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Project.findByIdAndDelete(args.id);
      },
    },
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        clientId: { type: GraphQLID },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatusUpdate",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
