import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/index';
import Home from './pages/Home';
import About from './pages/About';
import Requirements from './pages/Requirements';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Printing from './pages/Printing';
import Privacy from './pages/Privacy';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import ProjectsSection from './components/common/ProjectsSection';
import ContactForm from './components/common/ContactForm';
import MapSection from './components/common/MapSection';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

const App: React.FC = () => {
  const location = useLocation();
  
  // Список валидных маршрутов (статичные страницы)
  const validRoutes = ['/', '/about', '/requirements', '/contacts', '/services', '/printing', '/privacy', '/projects'];
  const isServicePage = location.pathname.startsWith('/services/') || 
                        (location.pathname !== '/' && 
                         !validRoutes.includes(location.pathname) && 
                         location.pathname !== '/printing');
  const isNotFoundPage = !validRoutes.includes(location.pathname) && !isServicePage;

  return (
    <div>
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/printing" element={<Printing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/:id" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isNotFoundPage && (
        <>
          {location.pathname !== '/projects' && <ProjectsSection />}
          <ContactForm />
          <MapSection />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
