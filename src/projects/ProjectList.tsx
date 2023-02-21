import React from 'react'
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const handleEdit = (project: Project) => {    
    console.log(project);
  };
  return (
    <ul className="row">
      {projects.map((project) => (
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="cols-sm">
              <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
              <ProjectForm />
            </div>
          ))}
        </div>
      ))}
    </ul>
  )
}

export default ProjectList