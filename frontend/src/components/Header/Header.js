import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = (props) => {
  return (
    <header className={`header ${props.menuOpen && 'header--active'}`}>
      <div className="header__wrapper">
        <div className="header__wrapper--left">
          <a className="logo" href="#hero">
            {`<FrancisKershaw />`}
          </a>
          <div className="iconContainer">
            <a href="https://www.linkedin.com/in/francis-kershaw/">
              <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
            </a>
            <a href="https://github.com/franciskershaw">
              <FontAwesomeIcon className="socialIcon" icon={faGithub} />
            </a>
          </div>
        </div>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="header__wrapper--right">
          <div
            onClick={() => props.setMenuOpen(!props.menuOpen)}
            className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
