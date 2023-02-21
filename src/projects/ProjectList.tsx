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
  return (
    <ul className="row">
      {projects.map((project) => (
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="cols-sm">
              {project === projectBeingEdited ? (
                <ProjectForm />
              ) : (
              <ProjectCard project={project} onEdit={handleEdit} />
          )}
            </div>
          ))}
        </div>
      ))}
    </ul>
  )
}

export default ProjectList