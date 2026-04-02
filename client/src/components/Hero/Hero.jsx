import React, { useRef, useState, useEffect } from 'react';
import { Mail, FileText, Globe, Activity, Code, PenTool } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './Hero.module.css';

const titles = [
  "I am a Full Stack Developer",
  "I build real-time web applications",
  "I engineer scalable web systems"
];

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
    <div className={styles.heroWrapper}>
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
              Full Stack Developer specializing in modern web applications with <strong>Next.js, TypeScript,</strong> and <strong>React</strong>. I build scalable, performant solutions featuring real-time systems, AI integration, and seamless user experiences.
            </motion.p>

            <motion.div variants={itemVariants} className={styles.actions}>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>
                <Mail size={16} /> Contact
              </button>
              <button className={`${styles.btn} ${styles.btnSecondary}`}>
                <FileText size={16} /> Resume
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.socials}>
              <a href="#" className={styles.socialIcon}><Globe size={18} /></a>
              <a href="#" className={styles.socialIcon}><Activity size={18} /></a>
              <a href="#" className={styles.socialIcon}><Code size={18} /></a>
              <a href="#" className={styles.socialIcon}><PenTool size={18} /></a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className={styles.profileSection}>
            <div className={styles.profilePlaceholder}>
              {/* Profile image placeholder left empty as requested */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
