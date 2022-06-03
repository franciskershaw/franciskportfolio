import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PageHeading = (props) => {
  const { ref, inView } = useInView();
  const [style, setStyle] = useState({
    width: 100,
  });

  // useEffect(() => {
  // 	if (inView) {
  // 		setStyle({
  // 			width: '100%'
  // 		})
  // 	}
  // 	if (!inView) {
  // 		setStyle({
  // 			width: 0
  // 		})
  // 	}
  // }, [inView]);

  return (
    <>
      <h2 ref={ref} className="page__heading">
        {props.text}
        <span
          style={inView ? { width: 100 } : { width: 0 }}
          className="page__heading--bottomBorder"></span>
      </h2>
    </>
  );
};

export default PageHeading;
