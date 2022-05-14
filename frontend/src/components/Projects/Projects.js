import { useEffect, useState, useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';
import ProjectCard from './ProjectCard/ProjectCard';
import AppContext from '../../context/AppContext';

const Projects = () => {
  const [projects, setProjects] = useState([{}]);
  const [slidesPerView, setSlidesPerView] = useState(2);

  const { windowDimensions } = useContext(AppContext);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

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
        <h2 className="page__heading">My recent work</h2>
      </div>
      <div className="swiper">
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          scrollbar={{ dragable: true }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          slidesPerView={slidesPerView}>
          {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="swiper__arrows">
        <button ref={navigationPrevRef}>Left</button>
        <button ref={navigationNextRef}>Right</button>
      </div> */}
    </div>
  );
};

export default Projects;
