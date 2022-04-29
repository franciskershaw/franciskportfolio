import { useEffect, useState } from 'react';

const ProjectCard = (props) => {
  // const [skills, setSkills] = useState([])

  // console.log(props.project.skills)

  // useEffect(() => {

  // },[props.project.skills])

  const style = {
    borderTop: `thick solid ${props.project.backgroundColor}`
  }

  return (
    <div className="projects__card">
      <div className="projects__card--container" style={style}>
        <div className="projects__card--title">
          <h3>{props.project.title}</h3>
          <h4>{props.project.subHeading}</h4>
        </div>
        <div className="projects__card--skills">
          <span>1 skill</span>
          <span>2 skill</span>
        </div>
        <div className="projects__card--buttons">
          <a
            className="btn btn--small"
            href={props.project.gitRepo}
            target="_blank"
            rel="noreferrer">
            Git Repo
          </a>
          <a
            className="btn btn--small"
            href={props.project.liveSite}
            target="_blank"
            rel="noreferrer">
            Live Site
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
