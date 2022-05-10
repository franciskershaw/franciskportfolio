import { useContext, useEffect, useRef } from 'react';
import AppContext from '../../context/AppContext';
import { init } from 'ityped';

const Hero = () => {
  const textRef = useRef();

  const { windowDimensions } = useContext(AppContext);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      loop: false,
      disableBackTyping: true,
      strings: [`Hi, my name is Francis.`],
      typeSpeed: 50
    });
  }, []);

  const nextText = () => {
    console.log('Next!');
  };

  return (
    <div id="hero" className="hero">
      <div className="hero__heading">
        <h1 className="mb-medium">
          <span ref={textRef}></span>
        </h1>
        <h3>
          I'm a frontend developer, specialising in React but with experience
          all over the stack.{' '}
          <span style={{ fontSize: '1rem' }}>
            - width: {windowDimensions.winWidth}px, height:{' '}
            {windowDimensions.winHeight}px
          </span>
        </h3>
      </div>
      <div className="hero__cta">
        <a href="#projects" className="btn btn--secondary">
          Find out more
        </a>
        {/* <a href='#contact' className='btn btn--secondary'>Get in touch</a> */}
      </div>
    </div>
  );
};

export default Hero;
