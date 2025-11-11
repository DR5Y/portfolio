import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-navy-dark bg-white transition-colors duration-300">
        <Navbar />
        <main>
          <Landing />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
