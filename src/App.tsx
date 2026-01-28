import { Routes, Route } from 'react-router-dom';
import { Navbar } from './layout/main/Navbar';
import { Footer } from './layout/main/Footer';
import { ScrollToTop } from './layout/main/ScrollToTop';
import { Home } from './screens/main/Home';
import { AboutPage } from './screens/main/AboutPage';
import { AppsPage } from './screens/main/AppsPage';
import { ProjectsPage } from './screens/main/ProjectsPage';
import { ContactPage } from './screens/main/ContactPage';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
