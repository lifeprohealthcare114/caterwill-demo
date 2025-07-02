import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLevelUpAlt, 
  FaMountain, 
  FaShieldAlt, 
  FaCogs, 
  FaBatteryFull, 
  FaUserFriends,
  FaTimes
} from 'react-icons/fa';

const features = [
  {
    icon: <FaLevelUpAlt />,
    title: "Stair Climbing",
    description: "Effortlessly navigates stairs with our patented track system",
    details: [
      "Handles steps up to 20cm high",
      "Maintains level seating position",
      "Smooth ascent and descent",
      "Safety sensors prevent tipping"
    ],
    iconBg: "#f0f7ff",
    iconColor: "#1e3a8a"
  },
  {
    icon: <FaMountain />,
    title: "All-Terrain Capability",
    description: "Conquers rough terrain, sand, snow, and more with 4WD power",
    details: [
      "Four powerful motors",
      "Adaptive suspension system",
      "Water-resistant components",
      "Stable on slopes up to 30°"
    ],
    iconBg: "#f0fdf4",
    iconColor: "#065f46"
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety First",
    description: "Advanced stability control and anti-tip features for complete security",
    details: [
      "Automatic braking system",
      "Anti-rollback technology",
      "Emergency stop button",
      "Low center of gravity design"
    ],
    iconBg: "#fef2f2",
    iconColor: "#b91c1c"
  },
  {
    icon: <FaCogs />,
    title: "Smart Controls",
    description: "Intuitive joystick control with multiple speed settings",
    details: [
      "Programmable presets",
      "Speed adjustment from 0-6 km/h",
      "Battery indicator",
      "Ergonomic design"
    ],
    iconBg: "#f5f3ff",
    iconColor: "#6d28d9"
  },
  {
    icon: <FaBatteryFull />,
    title: "Long Battery Life",
    description: "Extended range for all-day use on a single charge",
    details: [
      "Up to 20 km range",
      "Fast charging capability",
      "Battery status display",
      "Removable for easy charging"
    ],
    iconBg: "#fffbeb",
    iconColor: "#b45309"
  },
  {
    icon: <FaUserFriends />,
    title: "User Comfort",
    description: "Ergonomic design for maximum comfort during extended use",
    details: [
      "Adjustable seating positions",
      "Pressure-relief cushioning",
      "Customizable backrest",
      "Ample legroom"
    ],
    iconBg: "#fdf2f8",
    iconColor: "#be185d"
  }
];

const KeyFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const openFeature = (feature) => {
    setSelectedFeature(feature);
    document.body.style.overflow = 'hidden';
  };

  const closeFeature = () => {
    setSelectedFeature(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="features-title"
        >
          KEY FEATURES
        </motion.h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
              onClick={() => openFeature(feature)}
              whileHover={{ scale: 1.03 }}
            >
              <div 
                className="feature-icon"
                style={{ 
                  backgroundColor: feature.iconBg,
                  color: feature.iconColor
                }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <span className="learn-more">Learn more →</span>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedFeature && (
            <motion.div 
              className="feature-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeFeature}
            >
              <motion.div 
                className="feature-modal-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close-button"
                  onClick={closeFeature}
                  aria-label="Close feature details"
                >
                  <FaTimes />
                </button>
                
                <div 
                  className="modal-icon"
                  style={{ 
                    backgroundColor: selectedFeature.iconBg,
                    color: selectedFeature.iconColor
                  }}
                >
                  {selectedFeature.icon}
                </div>
                
                <h3 className="modal-title">{selectedFeature.title}</h3>
                <p className="modal-description">{selectedFeature.description}</p>
                
                <ul className="modal-details">
                  {selectedFeature.details.map((detail, i) => (
                    <li key={i} className="detail-item">
                      <span className="detail-bullet">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default KeyFeatures;