import classes from './Hero.module.scss';

const Hero = () => {
	return (
		<div id='hero' className={classes.hero}>
			<div className={classes.heroLeft}>
				This is the left side of the hero section
			</div>
			<div className={classes.heroRight}>
				This is the right side of the hero section
			</div>
		</div>
	)
}

export default Hero;