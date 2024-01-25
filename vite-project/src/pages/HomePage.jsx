import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages

export default function HomePage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data


  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <img src={"./GGL-React-Port.jpg"} className="card-img-top w-25" alt="..." />

      Quality Control Analyst with experience quickly identifying quality problems and recommending solutions. Strengths in identifying and troubleshooting problems. Key skills include:
      •	Technical: Extensive experience in Operating Systems IBM Mainframe Complexes |IBM OS | Microsoft products | Windows | MVS | VM/CMS | UNIX.
      •	Vast Experience in Languages and Programming Tools such as COBOL | Power Builder | Visual Basic | DCL | CA 7 | TSO/ISPF | DCL | VMS | CList | Syncsort | FileAid | SPUFI | QMF | Xpediter | Endeavor | Query search.
      •	Great experience with Database and Data Communications DB2 | SQL-DC/DS | Oracle | VSAM | CICS |
      Power Builder | IDMS | Oracle | IMS | JCL.
    </div>
  );
}
