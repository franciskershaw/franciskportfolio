import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {motion}  from 'framer-motion';

const PageHeading = (props) => {
  const { ref, inView } = useInView();

	useEffect(() => {
		console.log(`useEffect, ${props.section} inView = ${inView}`)
	}, [inView, props.section]);

  return (
		<>
			<motion.h2 ref={ref} className="page__heading">
				{props.text}
				<span className="page__heading--bottomBorder"></span>
			</motion.h2>
			
		</>
	);
};

export default PageHeading;
