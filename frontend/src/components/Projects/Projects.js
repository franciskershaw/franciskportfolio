import { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import PageHeading from '../PageHeading/PageHeading';
import ProjectCard from './ProjectCard/ProjectCard';
import AppContext from '../../context/AppContext';

const Projects = () => {
  const [projects, setProjects] = useState([{}]);
  const [slidesPerView, setSlidesPerView] = useState(2);

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

  useEffect(() => {
    if (windowDimensions.winWidth <= 600) {
      setSlidesPerView(1);
    } else if (windowDimensions.winWidth < 900) {
      setSlidesPerView(2);
    } else if (
      windowDimensions.winHeight > 900 &&
      windowDimensions.winWidth < 1400
    ) {
      setSlidesPerView(2);
    } else if (windowDimensions.winWidth < 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }, [windowDimensions]);

  return (
    <div id="projects" className="page projects">
      <div className="projects__title page__heading--container">
        <PageHeading text='My recent work' section='projects'/>
      </div>
      <div className="swiper">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          scrollbar={{ dragable: true }}
          slidesPerView={slidesPerView}
          preventClicks={false}
          preventClicksPropagation={false}>
          {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
