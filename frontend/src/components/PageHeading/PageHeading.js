import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const PageHeading = (props) => {
  const { ref, inView } = useInView();

	useEffect(() => {
		console.log(`useEffect, ${props.section} inView = ${inView}`)
	}, [inView]);

  return (
		<h2 ref={ref} className="page__heading">{props.text}</h2>
	);
};

export default PageHeading;
