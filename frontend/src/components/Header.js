import { useState, useEffect } from 'react';

import classes from './Header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Navbar</h2>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ''
          }`}>
          <ul>
            <li>
              <a href="#">PageOne</a>
            </li>
            <li>
              <a href="#">PageTwo</a>
            </li>
            <li>
              <a href="#">PageThree</a>
            </li>
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={handleMenuToggle} />
          ) : (
            <AiOutlineClose onClick={handleMenuToggle} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
