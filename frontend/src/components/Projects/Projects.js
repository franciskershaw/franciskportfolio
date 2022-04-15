import { useEffect } from 'react';
import { fetchProjects } from '../../requests/requests';

const Projects = () => {
  useEffect(() => {
		console.log('useEffect');
    const getProjects = async () => {
      try {
        const projects = await fetchProjects();
        console.log(projects);
      } catch (err) {
        console.log(err);
      }
    };
		getProjects();
  }, []);

  return (
    <div id="projects" className="projects">
      I'm the Projects section
    </div>
  );
};

export default Projects;
