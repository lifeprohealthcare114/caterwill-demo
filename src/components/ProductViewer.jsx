import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

function WheelchairModel({ viewMode }) {
  const groupRef = useRef();
  
  // Colors for different parts
  const colors = {
    frame: '#3a3a3a',
    seat: '#2563eb',
    backrest: '#1e40af',
    wheels: '#525252',
    footrest: '#6b7280',
    controls: '#ef4444'
  };

  return (
    <group ref={groupRef}>
      {/* Main Frame */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[1.8, 0.1, 0.8]} />
        <meshStandardMaterial color={colors.frame} />
      </mesh>

      {/* Seat */}
      <mesh position={[0, -0.1, 0.1]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[0.8, 0.05, 0.7]} />
        <meshStandardMaterial 
          color={viewMode === 'seat' ? '#f59e0b' : colors.seat} 
          emissive={viewMode === 'seat' ? '#f59e0b' : '#000000'}
          emissiveIntensity={viewMode === 'seat' ? 0.3 : 0}
        />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 0.3, -0.2]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[0.8, 0.05, 0.6]} />
        <meshStandardMaterial 
          color={viewMode === 'seat' ? '#f59e0b' : colors.backrest}
          emissive={viewMode === 'seat' ? '#f59e0b' : '#000000'}
          emissiveIntensity={viewMode === 'seat' ? 0.3 : 0}
        />
      </mesh>

      {/* Wheels */}
      <group position={[0, -0.3, 0]}>
        <mesh position={[0.9, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} rotation={[0, 0, Math.PI/2]} />
          <meshStandardMaterial color={colors.wheels} />
        </mesh>
        <mesh position={[-0.9, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} rotation={[0, 0, Math.PI/2]} />
          <meshStandardMaterial color={colors.wheels} />
        </mesh>
      </group>

      {/* Footrest */}
      <mesh position={[0, -0.5, 0.4]}>
        <boxGeometry args={[0.6, 0.02, 0.3]} />
        <meshStandardMaterial color={colors.footrest} />
      </mesh>

      {/* Controls */}
      <mesh position={[0.2, 0, -0.3]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color={viewMode === 'controls' ? '#f59e0b' : colors.controls}
          emissive={viewMode === 'controls' ? '#f59e0b' : '#000000'}
          emissiveIntensity={viewMode === 'controls' ? 0.5 : 0}
        />
      </mesh>
    </group>
  );
}

const views = [
  { id: 'default', label: 'Full View', description: "Explore the wheelchair from all angles. Rotate the model to examine the complete design." },
  { id: 'seat', label: 'Seat System', description: "The ergonomic seat with adjustable positioning and premium cushioning for all-day comfort." },
  { id: 'controls', label: 'Controls', description: "Intuitive joystick control system with multiple speed settings for precise operation." }
];

const ProductViewer = () => {
  const [activeView, setActiveView] = useState('default');
  const [isMobile, setIsMobile] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const controlsRef = useRef();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleRotation = () => {
    setAutoRotate(!autoRotate);
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !autoRotate;
      controlsRef.current.update();
    }
  };

  return (
    <section id="product-view" className="product-viewer-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="section-title"
        >
          INTERACTIVE 3D VIEWER
        </motion.h2>
        
        <div className="viewer-wrapper">
          <div className="viewer-container">
            <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              
              <Suspense fallback={null}>
                <WheelchairModel viewMode={activeView} />
              </Suspense>
              
              <OrbitControls 
                ref={controlsRef}
                enableZoom={!isMobile}
                autoRotate={autoRotate}
                autoRotateSpeed={1.5}
                enablePan={false}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
              />
              <Environment preset="city" />
            </Canvas>
            
            <button 
              className="rotation-toggle"
              onClick={toggleRotation}
              aria-label={autoRotate ? "Pause rotation" : "Start rotation"}
            >
              {autoRotate ? (
                <span role="img" aria-label="Pause">⏸</span>
              ) : (
                <span role="img" aria-label="Play">▶️</span>
              )}
            </button>
          </div>
          
          <div className="viewer-controls">
            <div className="view-selector">
              {views.map(view => (
                <motion.button
                  key={view.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`view-btn ${activeView === view.id ? 'active' : ''}`}
                  onClick={() => setActiveView(view.id)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {view.label}
                </motion.button>
              ))}
            </div>
            
            <motion.div
              className="view-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={activeView}
            >
              {views.find(v => v.id === activeView)?.description}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductViewer;