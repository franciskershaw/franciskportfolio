import classes from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = (props) => {
  return (
    <header
      className={`${classes.header} ${props.menuOpen && classes.headerActive}`}>
      <div className={classes.headerWrapper}>
        <div className={classes.headerWrapperLeft}>
          <a className={classes.logo} href="#hero">
            {`<FrancisKershawDev />`}
          </a>
          <div className={classes.iconContainer}>
            <FontAwesomeIcon className={classes.socialIcon} icon={faLinkedin} />
            <FontAwesomeIcon className={classes.socialIcon} icon={faGithub} />
          </div>
        </div>
        <div className={classes.headerWrapperRight}>
          <div
            onClick={() => props.setMenuOpen(!props.menuOpen)}
            className={classes.hamburger}>
            <span className={classes.line1}></span>
            <span className={classes.line2}></span>
            <span className={classes.line3}></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
