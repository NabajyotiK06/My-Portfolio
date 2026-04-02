import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import styles from './Footer.module.css';

const MagneticIcon = ({ children, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Max movement is 15px
    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialIcon}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.a>
  );
};

const Footer = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <FaGithub size={20} />, 
      href: 'https://github.com/NabajyotiK06' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedinIn size={20} />, 
      href: 'https://www.linkedin.com/in/nabajyoti-kalita' 
    },
    { 
      name: 'Instagram', 
      icon: <FaInstagram size={20} />, 
      href: 'https://www.instagram.com/_naba.jyoti_/' 
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.textLeft}>
            <span className={styles.monospace}>Got an idea?</span>
            <h2 className={styles.cta}>Let's build it.</h2>
            <p className={styles.description}>
              Full Stack Developer focused on building high performance<br/>and functional web experiences.
            </p>
          </div>
          
          <div className={styles.socialRight}>
            {socialLinks.map((social, i) => (
              <MagneticIcon key={i} href={social.href}>
                {social.icon}
              </MagneticIcon>
            ))}
          </div>
        </div>
        
        <div className={styles.copyright}>
          © 2026 Nabajyoti Kalita. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
