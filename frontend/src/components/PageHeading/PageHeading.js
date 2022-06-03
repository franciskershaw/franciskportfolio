import { useInView } from 'react-intersection-observer';

const PageHeading = (props) => {
  const { ref, inView } = useInView();

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
