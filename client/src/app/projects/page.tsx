'use client'
import Container from "@mui/material/Container";
import ProjectCard from "@/app/_components/Projects"
import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GET_PROJECTS } from '@/queries/projectQueries'
import { ProjectDataProps, ProjectProps } from '@/interfaces/project';
import Spinner from "@/app/_components/Spinner"
import Alert from "@/app/_components/Alert"
import Grid from '@mui/material/Grid';
import { Title } from "@/shared";
import Button from "@mui/material/Button";
import ModalProject from "../_components/Projects/Modal";
import {ADD_PROJECT} from "@/mutations/projectMutations"

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  const [openModal, setOpenModal] = useState(false);
  const [addProject] = useMutation(ADD_PROJECT);

  const handleOpenModal = () => {
    setOpenModal(true);
  };


  const handleCreateProject = (fields: ProjectDataProps) => {
    addProject({
      variables: fields,
      update(cache, { data: { addProject } }) {
        const { projects }: { projects: ProjectProps[] } = cache.readQuery({
          query: GET_PROJECTS,
        }) ?? { projects: [] };
        cache.writeQuery({
          query: GET_PROJECTS,
          data: { projects: [...projects, addProject] },
        });
      },
    });
  };

  if (loading) return <Spinner />;
  if (error) return <Alert message={error.message} />;
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Title>Projects</Title>
      <Button variant="contained" onClick={handleOpenModal}>Create project</Button>
      {data.projects?.length > 0 ? <Grid container>
        {data.projects.map((project: ProjectProps) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid> : <p>No projects</p>}

      <ModalProject
        open={openModal}
        setOpen={setOpenModal}
        onCreate={handleCreateProject}
      />
    </Container>
  )
}
