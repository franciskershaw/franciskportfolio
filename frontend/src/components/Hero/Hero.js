import { useContext, useEffect, useRef } from 'react';
import AppContext from '../../context/AppContext';
import { init } from 'ityped';

const Hero = () => {
  const h1Ref = useRef();

  const { windowDimensions } = useContext(AppContext);

  useEffect(() => {
    init(h1Ref.current, {
      showCursor: true,
      loop: false,
      disableBackTyping: true,
      strings: [`Hi, my name is Francis.`],
      typeSpeed: 50,
    });
  }, []);

  return (
    <div id="hero" className="hero">
      <div className="topSpanContainer">
        <aside>Width: {windowDimensions.winWidth}px</aside>
      </div>
      <div className="hero__heading">
        <h1 className="mb-medium">
          <span ref={h1Ref}></span>
        </h1>
        <h3>
          I'm a frontend developer, specialising in React but with experience
          all over the stack.
        </h3>
      </div>
      <div className="hero__cta">
        <a href="#projects" className="btn btn--secondary">
          Find out more
        </a>
        {/* <a href='#contact' className='btn btn--secondary'>Get in touch</a> */}
      </div>
      <div className="bottomSpanContainer">
        <aside>Height: {windowDimensions.winHeight}px</aside>
      </div>
      <div className="heightLine"></div>
    </div>
  );
};

export default Hero;
