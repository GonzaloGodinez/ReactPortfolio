import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import projectsArray from '../utils/projects.json'; 

export default function ProjectPage() {

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      look into bootstraps find a card on the website
      {projectsArray.map(project => (
        <div className="card mb-3">
          <img src={project.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href= {project.repo} className="btn btn-primary me-3">GitHUb</a>
              <a href= {project.deploy} className="btn btn-primary me-3">deployed demo</a>
            </div>
        </div>
      ))}


    </div>
  );
}
