import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const BlueCross = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="5.64" y1="5.64" x2="18.36" y2="18.36"></line>
    <line x1="5.64" y1="18.36" x2="18.36" y2="5.64"></line>
  </svg>
);

const Experience = () => {
  const cardRef = useRef(null);
  const [aurora, setAurora] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setAurora({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => setAurora((a) => ({ ...a, opacity: 0 }));

  return (
    <section className={styles.experienceSection}>
      <div className={styles.header}>
        <div className={styles.badge}>Journey</div>
        <h2 className={styles.title}>Experience</h2>
        <p className={styles.subtitle}>
          My professional journey and achievements in technology and development.
        </p>
      </div>

      <motion.div
        ref={cardRef}
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Aurora shimmer: multi-color gradient following the mouse */}
        <div
          className={styles.auroraOverlay}
          style={{
            background: `radial-gradient(circle 320px at ${aurora.x}% ${aurora.y}%, 
              rgba(59,130,246,0.08) 0%, 
              rgba(139,92,246,0.06) 30%, 
              rgba(16,185,129,0.04) 60%, 
              transparent 80%)`,
            opacity: aurora.opacity,
          }}
        />

        <div className={styles.cardHeader}>
          <div className={styles.logoContainer}>
            <BlueCross />
          </div>
          <div>
            <h3 className={styles.roleTitle}>Full Stack Developer</h3>
            <p className={styles.companyName}>Kakiyo OÜ</p>
          </div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineNodeActive}></div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineRole}>Full Stack Developer</h4>
              <span className={styles.timelineDate}>Jan 2026 - Present</span>
            </div>
          </div>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineNode}></div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineRole}>Frontend Developer</h4>
              <span className={styles.timelineDate}>Nov 2025 - Jan 2026</span>
            </div>
          </div>
        </div>

        <ul className={styles.achievements}>
          <li>Delivered the website build, including micro-interactive elements that highlight key features and provide clear visual feedback.</li>
          <li>Redesigned the dashboard UI/UX to improve clarity and make the workflow easier to follow between pages.</li>
          <li>Resolved user-flow blocking bugs, including real-time updates that improved car-queue productivity and reliability.</li>
          <li>Shipped core product features with thoughtful UI/UX enhancements to elevate overall usability and engagement.</li>
        </ul>

        <div className={styles.techStack}>
          {['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Appwrite'].map((tech) => (
            <span key={tech} className={styles.techPill}>{tech}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
