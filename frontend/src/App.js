import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-container">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="page-content">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
