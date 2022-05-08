import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Hero = () => {
  const { windowDimensions } = useContext(AppContext);

  return (
    <div id="hero" className='hero'>
      <div className='hero__heading'>
        <h1 className='mb-medium'>Hi there, I'm Francis.</h1>
        <p>
        - width: {windowDimensions.winWidth}px, height: {windowDimensions.winHeight}px
        </p>
      </div>
			<div className='hero__cta'>
				{/* Button components here */}
				<a href='#projects' className='btn'>My work</a>
        <a href='#contact' className='btn'>Get in touch</a>
			</div>
    </div>
  );
};

export default Hero;
