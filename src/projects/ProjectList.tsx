import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {    
    setProjectBeingEdited(project);
  };
  const cancelEditing = () => {
    setProjectBeingEdited({});
  };
  return (
    <Grid item xs={6} lg={3} xl={2}>
      {projects.map((project) => (
        <Grid container rowGap={1} columnGap={1} justifyContent="center" >
          {projects.map((project) => (
            <Grid key={project.id}>
              {project === projectBeingEdited ? (
                <ProjectForm  onCancel={cancelEditing} project={project}/>
              ) : (
              <ProjectCard project={project} onEdit={handleEdit} />
          )}
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  )
}

export default ProjectList