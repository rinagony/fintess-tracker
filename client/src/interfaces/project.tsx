import { ClientProps } from "./client";

interface ProjectProps{
  id: string;
  name: string;
  description: string;
  status: string;
  clientId: string;
}

interface ProjectDataProps {
  name: string;
  description: string;
  status: string;
  clientId: string;
}

interface ProjectExistingProps {
  name: string;
  description: string;
  status: string;
  client: ClientProps;
  id: string
}


export type {ProjectProps, ProjectDataProps, ProjectExistingProps}