import React, { useRef, useState, useEffect } from 'react';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';
import profilePic from '../../assets/profile_hamster.jpg';

const titles = [
  "I am a Full Stack Developer",
  "I build real-time web applications",
  "I engineer scalable web systems"
];

const SocialIconWithTooltip = ({ href, icon: Icon, label }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className={styles.socialIconWrapper} 
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(true)}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.6 }}
            animate={{ opacity: 1, y: -45, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.6 }}
            style={{ left: "50%" }}
            transition={{ 
              type: "spring",
              stiffness: 500,
              damping: 20,
              mass: 0.8
            }}
            className={styles.tooltip}
          >
            {label}
            <div className={styles.tooltipArrow} />
          </motion.div>
        )}
      </AnimatePresence>
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
        <Icon size={18} />
      </a>
    </div>
  );
};

const Hero = () => {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 60);

      if (!isDeleting && currentText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000); // pause at end
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // pause before next word
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setSpotlight((s) => ({ ...s, opacity: 0 }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className={styles.heroWrapper} id="home">
      <motion.div
        ref={cardRef}
        className={styles.heroCard}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Spotlight radial gradient that follows the cursor */}
        <div
          className={styles.spotlight}
          style={{
            left: spotlight.x,
            top: spotlight.y,
            opacity: spotlight.opacity,
          }}
        />

        <div className={styles.content}>
          <div className={styles.textContent}>
            <motion.h1 variants={itemVariants} className={styles.title}>
              Hi, I'm<br />
              <span className={styles.name}>Nabajyoti Kalita</span>
            </motion.h1>

            <motion.div variants={itemVariants} className={styles.badge} style={{ display: 'inline-flex', alignItems: 'center', minHeight: '1.5em' }}>
              <span>{currentText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                style={{
                  display: 'inline-block',
                  width: '2px',
                  backgroundColor: 'currentColor',
                  height: '1.2em',
                  marginLeft: '4px'
                }}
              />
            </motion.div>

            <motion.p variants={itemVariants} className={styles.description}>
              I’m a <strong>Full Stack Developer</strong> who builds scalable, high-performance web applications with a strong focus on <strong>real-time systems</strong>. Using modern tools like <strong>Next.js</strong> and the <strong>MERN stack</strong>, I create solutions that are fast, reliable, and built for real-world use.
            </motion.p>

            <motion.div variants={itemVariants} className={styles.actions}>
              <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                <Mail size={16} /> Contact
              </a>
              <a 
                href="/Nabajyoti_Kalita_CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                <FileText size={16} /> Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.socials}>
              <SocialIconWithTooltip href="https://github.com/NabajyotiK06" icon={FaGithub} label="GitHub" />
              <SocialIconWithTooltip href="https://www.linkedin.com/in/nabajyoti-kalita" icon={FaLinkedin} label="LinkedIn" />
              <SocialIconWithTooltip href="https://www.instagram.com/_naba.jyoti_/" icon={FaInstagram} label="Instagram" />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className={styles.profileSection}>
            <div className={styles.profileImageContainer}>
              <img src={profilePic} alt="Nabajyoti Kalita" className={styles.profileImage} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
