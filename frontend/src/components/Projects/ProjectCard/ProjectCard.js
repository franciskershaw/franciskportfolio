import { useEffect, useState } from 'react';


const ProjectCard = (props) => { 

  return (
    <div className="projects__card">
      <div className="projects__card--container">
        <h3>{props.project.title}</h3>
        <div className="projects__card--skills">placeholder</div>
        {props.project.screenShotOne && (
          <div className="projects__card--image">
            <picture>
              <img src={require(`../../../assets/${props.project.screenShotOne}_multidevice.png`)} alt="Project on multiple devices" />
            </picture>
          </div>
        )}
        <div className="projects_card--buttons">
          <a className="btn btn--small" href="#">
            Git Repo
          </a>
          <a className="btn btn--small" href="#">
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
