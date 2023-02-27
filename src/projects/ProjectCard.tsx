import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { Project } from './Project'
import { Link } from 'react-router-dom';

const formatDescription = (description: string): string => {
    return description.substring(0, 60) + '...'
}

interface ProjectCardProps {
  project: Project
  onEdit: (project: Project) => void
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
      };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <img src={project.imageUrl} alt={project.name} />
      <Link to={'/projects/' + project.id}>
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
        </Link>
        </CardActionArea>
        <CardActions>
        <Button 
        size="small"
        color="primary"
          onClick={() => {
                      handleEditClick(project);
                    }}
        >
          <span className="icon-edit "></span>
            Edit
          </Button>
          </CardActions>
      </Card>
  )
}

export default ProjectCard