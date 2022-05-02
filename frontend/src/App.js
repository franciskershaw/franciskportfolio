import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import { useState } from 'react';
import { DimensionsProvider } from './context/DimensionsContext';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <DimensionsProvider>
      <div className="page-container">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="page-content">
          <Hero />
          <Projects />
          <Contact />
        </div>
      </div>
    </DimensionsProvider>
  );
}

export default App;
