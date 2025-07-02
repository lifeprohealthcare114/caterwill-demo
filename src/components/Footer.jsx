import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Features", href: "#features" },
        { label: "Gallery", href: "#gallery" },
        { label: "Key Parts", href: "#parts" },
        { label: "Specifications", href: "#specs" },
      ]
    },
    {
      title: "Product",
      links: [
        { label: "GTS-4WD", href: "#" },
        { label: "Accessories", href: "#" },
        { label: "User Manual", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Warranty", href: "#" },
        { label: "Service Centers", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Story", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Privacy Policy", href: "#" }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="footer-about"
          >
            <h3 className="footer-logo">CATERWIL</h3>
            <p className="footer-description">
              Revolutionizing mobility with innovative wheelchair solutions that empower 
              individuals to overcome physical barriers and live life without limits.
            </p>
          </motion.div>
          
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="footer-links"
            >
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="footer-contact"
          >
            <h4>Contact Info</h4>
            <ul>
              <li className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>123 Industrial Area, Phase II<br />New Delhi, India 110020</span>
              </li>
              <li className="footer-contact-item">
                <FaPhone className="footer-contact-icon" />
                <span>+91 11 2345 6789</span>
              </li>
              <li className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" />
                <span>info@caterwil.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="footer-bottom"
        >
          <p>&copy; {currentYear} Caterwil. All rights reserved.</p>
          <p>Designed to empower mobility and independence.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;