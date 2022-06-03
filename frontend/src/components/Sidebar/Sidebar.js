import { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';

const Sidebar = (props) => {
  const { windowDimensions } = useContext(AppContext);
  const winWidth = windowDimensions.winWidth;

  useEffect(() => {
    if (winWidth > 767 && props.menuOpen) {
      props.setMenuOpen(false);
    }
  }, [winWidth, props]);

  return (
    <div className={`sidebar ${props.menuOpen && 'sidebar--active'}`}>
      <ul>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#hero">Home</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
