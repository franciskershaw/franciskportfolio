import { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [windowDimensions, setWindowDimensions] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimensions({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimensions]);

  return (
    <AppContext.Provider value={{ windowDimensions }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
