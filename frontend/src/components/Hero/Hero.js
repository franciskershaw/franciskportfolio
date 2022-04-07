const Hero = () => {
  return (
    <div id="hero" className='hero'>
      <div className='hero__heading'>
        <h1>Hi there, I'm Francis.</h1>
        <p>
          I'm a frontend developer, specialising in React but with experience
          all over the stack.
        </p>
      </div>
			<div className='hero__cta'>
				{/* Button components here */}
				<button className='btn'>Get in touch</button>
				<button className='btn'>My work</button>
			</div>
    </div>
  );
};

export default Hero;
