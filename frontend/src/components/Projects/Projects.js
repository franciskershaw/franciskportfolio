import { useEffect, useState } from 'react';
import { fetchProjects } from '../../requests/requests';

const Projects = () => {
  const [projects, setProject] = useState([{}])
  
  useEffect(() => {
    fetchProjects() 
  }, []);

  return (
    <div id="projects" className="projects">
      I'm the Projects section
    </div>
  );
};

export default Projects;
