import React from 'react';
import { Home, Folder, Mail, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [activeId, setActiveId] = React.useState('home');
  const location = useLocation();

  const navLinks = [
    { id: 'home', icon: <Home size={18} />, label: 'Home', href: '/#home' },
    { id: 'projects', icon: <Folder size={18} />, label: 'Projects', href: '/#projects' },
    { id: 'contact', icon: <Mail size={18} />, label: 'Contact', href: '/#contact' }
  ];

  if (location.pathname.startsWith('/project/')) {
    return null;
  }

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.navContainer}>
        {navLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActiveId(item.id)}
            className={`${styles.navItem} ${activeId === item.id ? styles.active : ''}`}
          >
            {item.icon}
            {item.label && activeId === item.id && (
              <motion.span
                className={styles.navLabel}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
              >
                {item.label}
              </motion.span>
            )}
            {activeId === item.id && (
              <motion.div
                layoutId="navIndicator"
                className={styles.navIndicator}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </a>
        ))}
        
        <div className={styles.divider}></div>
        <button className={styles.navItem}>
          <Sun size={18} />
        </button>
      </div>
    </motion.nav>
  );
};

export default NavBar;
