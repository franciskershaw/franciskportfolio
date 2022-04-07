import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = (props) => {
  return (
    <header
      className={`header ${props.menuOpen && 'headerActive'}`}>
      <div className='headerWrapper'>
        <div className='headerWrapperLeft'>
          <a className='logo' href="#hero">
            {`<FrancisKershaw />`}
          </a>
          <div className='iconContainer'>
            <FontAwesomeIcon className='socialIcon' icon={faLinkedin} />
            <FontAwesomeIcon className='socialIcon' icon={faGithub} />
          </div>
        </div>
        <div className='headerWrapperRight'>
          <div
            onClick={() => props.setMenuOpen(!props.menuOpen)}
            className='hamburger'>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
