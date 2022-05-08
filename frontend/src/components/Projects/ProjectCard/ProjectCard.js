import { useEffect, useState, useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props) => {
  const [skills, setSkills] = useState([]);

  const { windowDimensions } = useContext(AppContext);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };

    const projectSkills = props.project.skills;
    if (projectSkills) {
      projectSkills.forEach((skill) => {
        fetch(`/api/skills/${skill}`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setSkills((prevState) => [...prevState, data]);
          });
      });
    }
  }, [props.project.skills]);

  const style = {
    borderTop: `thick solid ${props.project.backgroundColor}`,
  };

  return (
    <div className="projects__card">
      <div className="projects__card--container" style={style}>
        <div className="projects__card--title">
          <h3>{props.project.title}</h3>
          <h4>{props.project.subHeading}</h4>
        </div>
        <div className="projects__card--skills">
          {skills.map((skill, index) => (
            <img
              alt={`${skill.name} logo`}
              className="skill__icon"
              src={require(`../../../assets/${skill.iconLink}`)}
              key={`${props.project.title}_skill_${index}`}></img>
          ))}
        </div>
        <div className="projects__card--buttons">
          <a
            className='btn btn--link btn--primary'
            href={props.project.liveSite}
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon className="btn__icon" icon={faArrowUpRightFromSquare}/> Live site
          </a>
          <a
            className='btn btn--link btn--primary'
            href={props.project.gitRepo}
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon className="btn__icon " icon={faGithub} /> GitHub
          </a>
        </div>
        {props.project.screenShotOne && (
          <div className="projects__card--image">
            <picture>
              <source
                srcSet={require(`../../../assets/${props.project.screenShotOne}_multidevice.png`)}
              />
              <img
                src={require(`../../../assets/${props.project.screenShotOne}_multidevice.png`)}
                alt="Project on multiple devices"
              />
            </picture>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
