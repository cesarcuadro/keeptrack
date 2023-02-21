import React from 'react'
import { Project } from './Project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className="row">
      {projects.map((project) => (
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="cols-sm">
              <ProjectCard project={project}></ProjectCard>
            </div>
          ))}
        </div>
      ))}
    </ul>
  )
}

export default ProjectList