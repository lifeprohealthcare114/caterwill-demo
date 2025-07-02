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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <Hero />
      <SideNavigation />
      <KeyFeatures />
      <ProductViewer />
       <GallerySection />
      <SpecsTable />
      <Footer />
    </div>
  );
}

export default App;