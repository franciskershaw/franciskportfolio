import placeholder from '../../../assets/amiresponsive.png';

const ProjectCard = (props) => {

  return (
    <div className="projects__card">
      <div className="projects__card--container">
        <h3>{props.project.title}</h3>
        <div className="projects__card--skills">
          skills go here
        </div>
        <div className="projects__card--image">
          <picture>
            <source srcSet={placeholder} />
            <img srcSet={placeholder} />
          </picture>
        </div>
        <div className="projects_card--buttons">
          <a className='btn btn--small' href="#">Git Repo</a>
          <a className='btn btn--small' href="#">Live Site</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
