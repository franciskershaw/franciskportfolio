import { useEffect, useState } from 'react';
// import { fetchProjects } from '../../requests/requests';

const Projects = () => {
  const [projects, setProjects] = useState([{}])
  
  useEffect(() => {
    fetch('/api/projects').then(
      response => response.json()
    ).then (
      data => {
        setProjects(data)
      }
    )
  }, []);

  return (
    <div id="projects" className="projects">
      {projects.map((project, index) => (
        <div key={`project_${index}`}>{project.title}</div>
      ))}
    </div>
  );
};

export default Projects;
