import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className='page-container'>
      <Header />
      <div className="page-content">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
