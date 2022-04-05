import classes from './Header.module.scss';

const Header = () => {

  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <div className={classes.headerWrapperLeft}>
          <a className={classes.logo} href="#hero">francisKershaw.</a>
          <div className={classes.iconContainer}>
            <span>LI</span>
            <span>GH</span>
          </div>
        </div>
        <div className={classes.headerWrapperRight}>
          Right side
        </div>
      </div>
    </header>
  );
};

export default Header;
