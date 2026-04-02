import React from 'react';
import { Mail, Globe, Activity, Code, PenTool } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.textLeft}>
          <span className={styles.monospace}>Got an idea?</span>
          <h2 className={styles.cta}>Let's build it.</h2>
          <p className={styles.description}>
            Full Stack Developer focused on building beautiful<br/>and functional web experiences.
          </p>
        </div>
        
        <div className={styles.socialRight}>
          <a href="#" className={styles.socialIcon}><Globe size={20} /></a>
          <a href="#" className={styles.socialIcon}><Activity size={20} /></a>
          <a href="#" className={styles.socialIcon}><Code size={20} /></a>
          <a href="#" className={styles.socialIcon}><PenTool size={20} /></a>
        </div>
      </div>
      
      <div className={styles.copyright}>
        © 2026 Vranda Garg. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
