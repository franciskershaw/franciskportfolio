import placeholder from '../../../assets/amiresponsive.png';

const ProjectCard = (props) => {

  return (
    <div className="projects__card">
      <div className="projects__card--container">
        <h2>{props.project.title}</h2>
        <div className="projects_card--image">
          <picture>
            <source srcSet={placeholder} />
            <img srcSet={placeholder} />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
