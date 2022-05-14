import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const PageNavigation = () => {
  const handleScrollUp = () => {
    console.log('Trying to scroll up');
  };
  const handleScrollDown = () => {
    console.log('Trying to scroll down');
    window.scrollTo(300, 500);
  };

  return (
    <div className="PageNavigation">
      <button onClick={handleScrollUp}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <button onClick={handleScrollDown}>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  );
};

export default PageNavigation;
