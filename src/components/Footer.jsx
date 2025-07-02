import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

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
      title: "Support",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Video Tutorials", href: "#" },
        { label: "Training", href: "#" },
        { label: "Maintenance", href: "#" },
        { label: "Spare Parts", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5 }}
            className="footer-about"
          >
            <div className="footer-logo-wrapper">
              <img src="/logo.png" alt="Caterwil Logo" className="footer-logo" />
              <h3 className="footer-brand">CATERWIL</h3>
            </div>
            <p className="footer-description">
              Revolutionizing mobility with innovative wheelchair solutions that empower 
              individuals to overcome physical barriers.
            </p>
            
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Navigation Links Columns */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="footer-links"
            >
              <h4 className="footer-links-title">{section.title}</h4>
              <ul className="footer-links-list">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="footer-contact"
          >
            <h4 className="footer-contact-title">Contact Info</h4>
            <ul className="footer-contact-list">
              <motion.li 
                className="footer-contact-item"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="contact-label">Address</span>
                  <span className="contact-value">123 Industrial Area, Phase II<br />New Delhi, India 110020</span>
                </div>
              </motion.li>
              
              <motion.li 
                className="footer-contact-item"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 11 2345 6789</span>
                </div>
              </motion.li>
              
              <motion.li 
                className="footer-contact-item"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">info@caterwil.com</span>
                </div>
              </motion.li>
              
              <motion.li 
                className="footer-contact-item"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <div className="contact-icon">
                  <MdAccessTime />
                </div>
                <div>
                  <span className="contact-label">Hours</span>
                  <span className="contact-value">Mon-Sat: 9AM-6PM<br /></span>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Caterwil Technologies. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="divider">|</span>
              <a href="#">Terms of Service</a>
              <span className="divider">|</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
          <p className="footer-mission">
            Designed to empower mobility and independence worldwide.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;