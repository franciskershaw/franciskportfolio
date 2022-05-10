import { useContext, useEffect, useRef } from 'react';
import AppContext from '../../context/AppContext';
import { init } from 'ityped';

const Hero = () => {
  const h1Ref = useRef();
  const widthLine = useRef();
  const heightLine = useRef();

  const { windowDimensions } = useContext(AppContext);

  useEffect(() => {
    init(h1Ref.current, {
      showCursor: true,
      loop: false,
      strings: [`Hey there!`, `I'm Francis...`],
      typeSpeed: 80,
      startDelay: 800
    });
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      widthLine.current.style.width = "100%";
      heightLine.current.style.height = '100%';
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  },[])

  return (
    <div id="hero" className="hero">
      <div className="topSpanContainer">
        <aside className='appear-first'>Width: {windowDimensions.winWidth}px</aside>
        <div ref={widthLine} className="widthLine"></div>
      </div>
      {/* <div className="widthLine"></div> */}
      <div className="hero__heading">
        <h1 className="mb-medium">
          <span ref={h1Ref}></span>
        </h1>
        <h3 className='appear-second'>
          ...a professional frontend engineer and freelance website developer, specialising in React but with experience
          all over the stack.
        </h3>
      </div>
      <div className="hero__cta appear-third">
        <a href="#projects" className="btn btn--secondary">
          Projects
        </a>
        <a href='#contact' className='btn btn--secondary'>Contact</a>
      </div>
      <div className="bottomSpanContainer">
        <aside className='appear-first'>Height: {windowDimensions.winHeight}px</aside>
      </div>
      <div ref={heightLine} className="heightLine"></div>
    </div>
  );
};

export default Hero;
