"use client";

import Alert from "@/app/_components/Alert";
import ClientInfo from "@/app/_components/Clients/ClientInfo";
import Spinner from "@/app/_components/Spinner";
import { GET_PROJECT, GET_PROJECTS } from "@/queries/projectQueries";
import { useMutation, useQuery } from "@apollo/client";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { DELETE_PROJECT, UPDATE_PROJECT } from "@/mutations/projectMutations";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ModalProject from "@/app/_components/Projects/Modal";
import { ProjectDataProps, ProjectProps } from "@/interfaces/project";

const ProjectItemWrapper = styled.div`
  p {
    color: #000;
  }
`;

const ProjectItem = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: projectId },
  });
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => router.push("/", { scroll: false }),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const [updateProject] = useMutation(UPDATE_PROJECT);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };


  const handleUpdateProject = (fields: ProjectDataProps, selectedProjectId: string | undefined) => {
    const updatedItem = {...fields, id: selectedProjectId}
    updateProject({
      variables: updatedItem,
      refetchQueries: [{ query: GET_PROJECT, variables: { id: projectId}}]
    });
  };

  if (loading) return <Spinner />;
  if (error) return <Alert message={error.message} />;
  return (
    <ProjectItemWrapper>
      <Button variant="contained" onClick={() => deleteProject()}>
        Delete project
      </Button>
      <Button variant="contained" onClick={() => handleOpenModal()}>
        Edit project
      </Button>
      <h1>Project: {data.project.name}</h1>
      <p>Description: {data.project.description}</p>
      <p>Status: {data.project.status}</p>
      <ClientInfo client={data.project.client} />

      <ModalProject
        open={openModal}
        setOpen={setOpenModal}
        onCreate={handleUpdateProject}
        selectedProject={data.project}
      />
    </ProjectItemWrapper>
  );
};

export default ProjectItem;
