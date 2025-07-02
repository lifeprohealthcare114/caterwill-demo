import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  {
    id: 1,
    src: "/assets/images/product/caterwheechair1.jpg",
    alt: "Front view of Caterwil GTS-4WD",
    title: "Front View",
    description: "The sleek front design showcases the intuitive control system and comfortable seating position."
  },
  {
    id: 2,
    src: "/assets/images/product/caterwheechair2.jpg",
    alt: "Side profile of Caterwil GTS-4WD",
    title: "Side Profile",
    description: "The side view reveals the wheelchair's compact dimensions and advanced suspension system."
  },
  {
    id: 3,
    src: "/assets/images/product/caterwheechair3.jpg",
    alt: "Rear view of Caterwil GTS-4WD",
    title: "Rear View",
    description: "The rear perspective highlights the powerful all-terrain wheels and durable construction."
  },
  {
    id: 4,
    src: "/assets/images/product/caterwheechair.jpg",
    alt: "Caterwil GTS-4WD demonstrating stair climbing",
    title: "Stair Climbing",
    description: "The wheelchair effortlessly ascends stairs while maintaining perfect balance and stability."
  },
  {
    id: 5,
    src: "/assets/images/product/caterwheechair4.jpg",
    alt: "Caterwil GTS-4WD on rough terrain",
    title: "All-Terrain Performance",
    description: "Conquering uneven surfaces with the advanced track system and 4WD power."
  },
  {
    id: 6,
    src: "/assets/images/product/caterwheechair5.jpg",
    alt: "Caterwil GTS-4WD indoor use",
    title: "Indoor Use",
    description: "Compact turning radius allows for easy navigation in confined spaces."
  }
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gallery-title"
        >
          PRODUCT GALLERY
        </motion.h2>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-item-title">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="gallery-modal-overlay"
              onClick={closeModal}
            >
              <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="gallery-modal-close"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
                
                <div className="gallery-modal-image-container">
                  <img 
                    src={images[currentIndex].src} 
                    alt={images[currentIndex].alt}
                    className="gallery-modal-image"
                  />
                  <div className="gallery-modal-info">
                    <h3>{images[currentIndex].title}</h3>
                    <p>{images[currentIndex].description}</p>
                  </div>
                </div>
                
                <div className="gallery-modal-controls">
                  <button 
                    className="gallery-modal-nav prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                  
                  <div className="gallery-modal-dots">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentIndex(idx);
                        }}
                        className={`gallery-modal-dot ${currentIndex === idx ? 'active' : ''}`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    className="gallery-modal-nav next"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;