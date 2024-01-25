import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import resumeArray from '../utils/resume.json';

export default function ResumePage() {

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <p>
        look into bootstraps find a card on the website
      </p>
     
      {resumeArray.map(resume => (
        <div className="card mb-3">
          
          <div className="card-body">
            <h5 className="card-frontend">{resume.frontend}</h5>
            <p className="card-text">{resume.skills}</p>
            <a href={resume.download} className="btn btn-primary me-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
            </svg>View download Resume</a>
          </div>
        </div>
      ))}


    </div>
  );
}
