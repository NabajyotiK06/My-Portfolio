import React from 'react';
import { Home, Folder, Mail, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.navContainer}>
        <button className={`${styles.navItem} ${styles.active}`}>
          <Home size={18} />
          <span>Home</span>
        </button>
        <button className={styles.navItem}>
          <Folder size={18} />
        </button>
        <button className={styles.navItem}>
          <Mail size={18} />
        </button>
        <div className={styles.divider}></div>
        <button className={styles.navItem}>
          <Sun size={18} />
        </button>
      </div>
    </motion.nav>
  );
};

export default NavBar;
