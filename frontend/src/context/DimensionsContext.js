import { createContext, useState, useEffect } from 'react';

const DimensionsContext = createContext();

export function DimensionsProvider({ children }) {
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
    <DimensionsContext.Provider value={{ windowDimensions }}>
      {children}
    </DimensionsContext.Provider>
  );
}

export default DimensionsContext;
