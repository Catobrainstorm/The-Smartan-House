import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgressBar from './components/layout/ScrollProgressBar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import WarRoom from './pages/WarRoom';
import News from './pages/News';
import CultureSeriesPage from './pages/CultureSeries';
import Campaign from './pages/Campaign';
import CNG from './pages/CNG';
import Consortium from './pages/Consortium';
import CultureCourse from './pages/CultureCourse';

function App() {
  useSmoothScroll();

  return (
    <Router>
      <div className="min-h-screen bg-smartan-navy text-white">
        <Navbar />
        <ScrollProgressBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/war-room" element={<WarRoom />} />
          <Route path="/news" element={<News />} />
          <Route path="/culture-series" element={<CultureSeriesPage />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/cng" element={<CNG />} />
          <Route path="/consortium" element={<Consortium />} />
          <Route path="/culture-course" element={<CultureCourse />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;