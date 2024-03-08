import React from 'react'
import { ProjectProps } from '@/interfaces/project';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Link from 'next/link'

interface ProjectListProps {
  key: string;
  project: ProjectProps;
}

export default function ProjectCard({ project }: ProjectListProps) {
  return (
    <Grid item xs={4}>
      <Typography variant="h5" component="div">{project.name}</Typography>
      <Typography sx={{ fontSize: 18 }} color="text.secondary">
        {project.description}
      </Typography>
      <Link href="/projects/[projectId]" as={`/projects/${project.id}`}>
        View
      </Link>
    </Grid>
  )
}
