import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, ExternalLink } from 'lucide-react';
import styles from './Experience.module.css';

const BlueCross = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="5.64" y1="5.64" x2="18.36" y2="18.36"></line>
    <line x1="5.64" y1="18.36" x2="18.36" y2="5.64"></line>
  </svg>
);

const trainingData = {
  cpp: {
    id: 1,
    title: "C++ Programming: OOPs & DSA",
    company: "CSE Pathshala",
    roles: [
      { title: "C++ Developer Trainee", date: "Jun 2025 – Jul 2025", active: true },
      { title: "Data Structures & Algorithms Learner", date: "", active: false }
    ],
    description: [
      "Built a strong foundation in Object-Oriented Programming including classes, inheritance, polymorphism, abstraction, and encapsulation",
      "Implemented core data structures such as arrays, linked lists, stacks, and queues, along with algorithms for sorting and searching",
      "Solved DSA problems using recursion and optimized approaches to improve problem-solving skills",
      "Developed a command-line Student Management System using C++ with file handling and OOP principles"
    ],
    tech: ["C++", "OOP", "Data Structures", "Algorithms", "File Handling"],
    certificateUrl: "https://drive.google.com/file/d/1J88GWAOO4CyH0RkjXrgrt6Naemag362l/view?usp=sharing"
  },
  web: {
    id: 2,
    title: "Web Development – Industrial Training",
    company: "InternsElite",
    roles: [
      { title: "Web Development Trainee", date: "Jan 2024 – Feb 2024", active: true },
      { title: "Full Stack Development Learner", date: "", active: false }
    ],
    description: [
      "Completed industrial training in web development, gaining hands-on experience in building modern web applications",
      "Developed strong foundations in frontend and backend development, working with real-world development workflows",
      "Learned to design responsive and user-friendly interfaces while understanding core web technologies",
      "Gained exposure to full-stack development concepts, including client-server architecture and application structuring"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js"],
    certificateUrl: "https://drive.google.com/file/d/1THPHowUoao1tmVLN7JoSaYNh9NYtCtYG/view?usp=sharing"
  }
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState('cpp');
  const cardRef = useRef(null);
  const [aurora, setAurora] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setAurora({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => setAurora((a) => ({ ...a, opacity: 0 }));

  const data = trainingData[activeTab];

  return (
    <section className={styles.experienceSection}>
      <div className={styles.header}>
        <div className={styles.badge}>Journey</div>
        <h2 className={styles.title}>Training</h2>
        <p className={styles.subtitle}>
          Professional training and foundational coursework that structured my development expertise.
        </p>
        
        <div className={styles.viewToggle}>
          <button 
            className={`${styles.toggleBtn} ${activeTab === 'cpp' ? styles.active : ''}`}
            onClick={() => setActiveTab('cpp')}
          >
            <Code2 size={14} /> C++ & DSA
          </button>
          <button 
            className={`${styles.toggleBtn} ${activeTab === 'web' ? styles.active : ''}`}
            onClick={() => setActiveTab('web')}
          >
            <Globe size={14} /> Web Development
          </button>
        </div>
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
        style={{ maxWidth: '800px', width: '100%' }}
      >
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.logoContainer}>
                <BlueCross />
              </div>
              <div>
                <h3 className={styles.roleTitle}>{data.title}</h3>
                <p className={styles.companyName}>{data.company}</p>
              </div>
            </div>

            <div className={styles.timeline}>
              {data.roles.map((role, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={role.active ? styles.timelineNodeActive : styles.timelineNode}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineRole}>{role.title}</h4>
                    {role.date && <span className={styles.timelineDate}>{role.date}</span>}
                  </div>
                </div>
              ))}
            </div>

            <ul className={styles.achievements}>
              {data.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            <div className={styles.techStack}>
              {data.tech.map((tech) => (
                <span key={tech} className={styles.techPill}>{tech}</span>
              ))}
            </div>

            <div className={styles.certificateLinkContainer}>
              <a 
                href={data.certificateUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.certBtn}
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Experience;
