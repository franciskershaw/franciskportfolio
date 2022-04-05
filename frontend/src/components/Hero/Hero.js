import classes from './Hero.module.scss';

const Hero = () => {
	return (
		<div id='hero' className={classes.hero}>
			<div className={classes.heroLeft}>
				<div className={classes.imgContainer}>
					<img src="assets/hero-image.jpeg" alt="" />
				</div>
			</div>
			<div className={classes.heroRight}></div>
		</div>
	)
}

export default Hero;