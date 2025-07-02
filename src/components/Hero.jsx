import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    
    const video = videoRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    if (video) {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(error => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
      }
    }

    return () => {
      if (video) {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      }
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Play/pause error:", error);
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <section id="home" className="hero">
      <video 
        ref={videoRef}
        loop 
        muted={isMobile ? true : isMuted}
        playsInline 
        className="hero-video"
        aria-label="Caterwil GTS-4WD wheelchair in action"
        preload="auto"
        poster="/assets/images/video-poster.jpg"
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
        <source src="/assets/videos/hero.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          STAIR CLIMBING ALL-TERRAIN WHEELCHAIR
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          CATERWIL GTS-4WD
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-description"
        >
          Revolutionary mobility solution that conquers stairs, rough terrain, 
          and everyday obstacles with ease.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-buttons"
        >
          <a href="#features" className="btn btn-primary">Explore Features</a>
          <a href="#specs" className="btn btn-secondary">Technical Specs</a>
        </motion.div>
      </div>
      
      {!isMobile && (
        <div className="video-controls">
          <button 
            onClick={togglePlay}
            className="video-control-btn"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button 
            onClick={toggleMute}
            className="video-control-btn"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      )}
      
      <a href="#features" className="scroll-down" aria-label="Scroll to next section">
        <FaChevronDown />
      </a>
    </section>
  );
};

export default Hero;