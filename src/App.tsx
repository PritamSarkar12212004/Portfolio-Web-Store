import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { AppsShowcase } from './components/sections/AppsShowcase';
import { AppStore } from './components/sections/AppStore';
import { BackendProjects } from './components/sections/BackendProjects';
import { TechStack } from './components/sections/TechStack';
import { Contact } from './components/sections/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <AppsShowcase />
        <AppStore />
        <BackendProjects />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
