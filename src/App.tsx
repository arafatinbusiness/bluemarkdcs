import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ApplicationForm from './pages/ApplicationForm';
import Journals from './pages/Journals';
import About from './pages/About';
import Contact from './pages/Contact';
import Location from './pages/Location';
import AdminLogin from './pages/AdminLogin';
import DetailedServicesPage from './pages/DetailedServicesPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/apply/:serviceId" element={<ApplicationForm />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/detailed-services" element={<DetailedServicesPage />} />
      </Routes>
    </Router>
  );
}
