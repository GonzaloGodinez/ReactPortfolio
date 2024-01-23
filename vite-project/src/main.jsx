import React from 'react';
import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// import App from './App.jsx'
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // h1: <Gonzalo Godinez Luna/>,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'project',
        element: <ProjectPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);
// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
