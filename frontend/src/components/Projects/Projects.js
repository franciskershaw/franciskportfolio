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
      {/* <h2>My recent work</h2> */}
      {/* {projects.map((project, index) => (
        <div key={`project_${index}`}>{project.title}</div>
      ))} */}
      <div className="swiper">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>Project 1</SwiperSlide>
          <SwiperSlide>Project 2</SwiperSlide>
          <SwiperSlide>Project 3</SwiperSlide>
          <SwiperSlide>Project 4 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
