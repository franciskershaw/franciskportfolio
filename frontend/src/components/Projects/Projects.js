import { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([{}]);
  const { windowDimensions } = useContext(AppContext);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };
    fetch('/api/projects', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div id="projects" className="page projects">
      <h2 className="page__heading">My recent work</h2>
      {/* Render a swiper if the screen width is less than 768px */}
      <div className="swiper">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            768: { width: 768, slidesPerView: 2 }
          }}>
          {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      )
    </div>
  );
};

export default Projects;
