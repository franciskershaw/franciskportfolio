import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import PageNavigation from './components/PageNavigation/PageNavigation';
import { useState } from 'react';
import { AppProvider } from './context/AppContext';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppProvider>
      <div className="page-container">
        <PageNavigation />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="page-content">
          <Hero />
          <Projects />
          <Contact />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
