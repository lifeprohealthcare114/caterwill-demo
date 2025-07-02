import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import GallerySection from './components/GallerySection';
import ProductViewer from './components/ProductViewer';
import SpecsTable from './components/SpecsTable';
import Footer from './components/Footer';
import SideNavigation from './components/SideNavigation';
import './styles/main.css';
import './styles/animations.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner-circle"></div>
          <p>Loading Caterwil GTS-4WD</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <KeyFeatures />
        <GallerySection />
        <ProductViewer />
        <SpecsTable />
      </main>
      <Footer />
      <SideNavigation />
    </div>
  );
}

export default App;