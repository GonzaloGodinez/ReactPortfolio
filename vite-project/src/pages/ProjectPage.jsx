import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import projectsArray from '../utils/projects.json';

export default function ProjectPage() {

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <p>
        Blogger Database
        https://github.com/GonzaloGodinez/TheTechbloggl
        Ecommerce
        Weather Forecast Server-Side API
        https://gonzalogodinez.github.io/ServerSideAPIs/
        SQL DB https://gsgges-p2-01b3ebe075ed.herokuapp.com/
        Group Projects
        What is in your Pantry
        https://ltrokey.github.io/c7_recipe_builder/index.html
        Library Management System
        https://gsgges-p2-01b3ebe075ed.herokuapp.com/

      </p>
     
      {projectsArray.map(project => (
        <div className="card mb-3">
          <img src={project.image} className="card-img-top w-75" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.repo} className="btn btn-primary me-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>View GitHub Repo </a>
            <a href={project.deploy} className="btn btn-primary me-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
            </svg>View Deployed App</a>
          </div>
        </div>
      ))}


    </div>
  );
}
