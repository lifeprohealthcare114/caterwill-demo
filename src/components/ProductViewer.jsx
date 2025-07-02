import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useProgress, Html } from '@react-three/drei';
import { motion } from 'framer-motion';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="loader">
        Loading {Math.round(progress)}%
      </div>
    </Html>
  );
}

function Model({ url }) {
  // In a real implementation, you would use useGLTF to load your 3D model
  return (
    <mesh>
      <boxGeometry args={[2, 1, 1.5]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

const views = [
  { id: 'default', label: 'Full View' },
  { id: 'tracks', label: 'Track System' },
  { id: 'seat', label: 'Seat' },
  { id: 'controls', label: 'Controls' },
];

const ProductViewer = () => {
  const [activeView, setActiveView] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <section id="product-view" className="section product-viewer">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          360° PRODUCT VIEWER
        </motion.h2>
        
        <div className="viewer-container">
          <Canvas>
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              
              <Model url="/models/caterwil-gts.glb" />
              
              <OrbitControls 
                enableZoom={!isMobile}
                autoRotate 
                autoRotateSpeed={1.5} 
                enablePan={false}
              />
              <Environment preset="studio" />
            </Suspense>
          </Canvas>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="view-selector"
        >
          {views.map(view => (
            <motion.button
              key={view.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`view-btn ${activeView === view.id ? 'active' : ''}`}
              onClick={() => setActiveView(view.id)}
            >
              {view.label}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="view-description"
        >
          {activeView === 'default' && (
            <p>
              Explore the Caterwil GTS-4WD from every angle. Rotate the model to see the innovative 
              design that combines rugged durability with user comfort.
            </p>
          )}
          {activeView === 'tracks' && (
            <p>
              Our patented track system provides unmatched stability on stairs and rough terrain. 
              Notice the robust construction designed for years of reliable use.
            </p>
          )}
          {activeView === 'seat' && (
            <p>
              The ergonomic seat features adjustable positioning and premium cushioning. Designed 
              for all-day comfort with multiple recline options.
            </p>
          )}
          {activeView === 'controls' && (
            <p>
              The intuitive control system offers precise handling with multiple speed settings. 
              The joystick is designed for easy operation with minimal effort.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductViewer;