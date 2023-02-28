import React from 'react';
import { Project } from './Project';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        height="400"
        image={project.imageUrl}
        alt={project.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Budget : {project.budget}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Signed: {project.contractSignedOn.toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <mark className="active">
            {project.isActive ? 'active' : 'inactive'}
          </mark>
        </Typography>
      </CardContent>
    </Card>
  );
}
