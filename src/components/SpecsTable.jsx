import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';  // Added AnimatePresence import
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const specs = [
  { 
    id: 'dimensions',
    category: "Dimensions", 
    icon: "📏",
    items: [
      { id: 'length', name: "Overall Length", value: "110 cm", note: "With footrest" },
      { id: 'width', name: "Overall Width", value: "70 cm", note: "At widest point" },
      { id: 'height', name: "Overall Height", value: "95 cm", note: "From ground to headrest" },
      { id: 'seat-width', name: "Seat Width", value: "45 cm", note: "Adjustable ±5 cm" },
      { id: 'seat-depth', name: "Seat Depth", value: "50 cm", note: "Adjustable ±5 cm" },
      { id: 'seat-height', name: "Seat Height", value: "55 cm", note: "From ground to seat" },
      { id: 'weight-cap', name: "Weight Capacity", value: "120 kg", note: "Maximum user weight" },
    ]
  },
  {
    id: 'performance',
    category: "Performance",
    icon: "⚡",
    items: [
      { id: 'speed', name: "Max Speed", value: "6 km/h", note: "Adjustable in 0.5 km/h increments" },
      { id: 'range', name: "Battery Range", value: "20 km", note: "Under normal conditions" },
      { id: 'slope', name: "Max Slope", value: "30°", note: "With standard configuration" },
      { id: 'step', name: "Max Step Height", value: "20 cm", note: "For stair climbing" }
    ]
  },
  {
    id: 'battery',
    category: "Battery",
    icon: "🔋",
    items: [
      { id: 'type', name: "Battery Type", value: "Lithium-ion", note: "Removable for charging" },
      { id: 'voltage', name: "Voltage", value: "24V", note: "DC power system" },
      { id: 'charge', name: "Charge Time", value: "4-6 hours", note: "Fast charging available" },
      { id: 'life', name: "Battery Life", value: "500 cycles", note: "To 80% capacity" }
    ]
  }
];

const SpecsTable = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="specs" className="specs-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          TECHNICAL SPECIFICATIONS
        </motion.h2>
        
        <div className="specs-categories">
          {specs.map((category) => (
            <motion.div 
              key={category.id}
              className="specs-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button 
                className="category-header"
                onClick={() => toggleCategory(category.id)}
                aria-expanded={expandedCategory === category.id}
                aria-controls={`category-${category.id}`}
              >
                <div className="category-title">
                  <span className="category-icon" aria-hidden="true">{category.icon}</span>
                  <h3>{category.category}</h3>
                </div>
                {expandedCategory === category.id ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              <AnimatePresence>
                {expandedCategory === category.id && (
                  <motion.div
                    id={`category-${category.id}`}
                    className="category-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <table className="specs-table">
                      <thead>
                        <tr>
                          <th>Specification</th>
                          <th>Value</th>
                          <th>Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item) => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td className="spec-value">{item.value}</td>
                            <td className="spec-notes">{item.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsTable;