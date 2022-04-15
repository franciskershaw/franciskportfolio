import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const Projects = () => {
  const [projects, setProjects] = useState([{}]);

  useEffect(() => {
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div id="projects" className="projects">
      <h2>My recent work</h2>
      <div className="swiper">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`}>
              <div>
                <h3>{project.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
