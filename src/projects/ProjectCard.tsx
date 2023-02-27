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
      <CardMedia component="img" src={project.imageUrl} alt={project.name} />
      <CardContent>
      <Link to={'/projects/' + project.id}>
      <Typography gutterBottom variant="h5" component="div">
          {project.name}
      </Typography>
        <Typography variant="body2" color="text.secondary">
          {formatDescription(project.description)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Budget : {project.budget.toLocaleString()}
        </Typography>
        </Link>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button 
        size="small"
        color="primary"
          onClick={() => {
                      handleEditClick(project);
          }}
          style={{border: "solid"}}
        >
            Edit
          </Button>
          </CardActions>
      </Card>
  )
}

export default ProjectCard