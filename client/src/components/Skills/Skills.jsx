import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, 
  SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiMongodb,
  SiGreensock, SiThreedotjs, SiMysql, SiJsonwebtokens, SiSocketdotio, SiWebrtc,
  SiCplusplus, SiPython, SiC, SiGit, SiFigma, SiDocker
} from 'react-icons/si';
import { FaJava, FaGithub, FaAws, FaNetworkWired, FaBolt } from 'react-icons/fa6';
import styles from './Skills.module.css';

const skillsData = [
  { name: 'Next.js', category: 'Frontend Development', icon: <SiNextdotjs size={24} /> },
  { name: 'React.js', category: 'Frontend Development', icon: <SiReact size={24} /> },
  { name: 'JavaScript', category: 'Programming Languages & Tools', icon: <SiJavascript size={24} /> },
  { name: 'TypeScript', category: 'Programming Languages & Tools', icon: <SiTypescript size={24} /> },
  { name: 'Tailwind CSS', category: 'Frontend Development', icon: <SiTailwindcss size={24} /> },
  { name: 'Framer Motion', category: 'Frontend Development', icon: <SiFramer size={24} /> },
  { name: 'GSAP', category: 'Frontend Development', icon: <SiGreensock size={24} /> },
  { name: 'Three.js', category: 'Frontend Development', icon: <SiThreedotjs size={24} /> },
  { name: 'Node.js', category: 'Backend & Database', icon: <SiNodedotjs size={24} /> },
  { name: 'Express.js', category: 'Backend & Database', icon: <SiExpress size={24} /> },
  { name: 'MongoDB', category: 'Backend & Database', icon: <SiMongodb size={24} /> },
  { name: 'MySQL', category: 'Backend & Database', icon: <SiMysql size={24} /> },
  { name: 'REST APIs', category: 'Backend & Database', icon: <FaNetworkWired size={24} /> },
  { name: 'JWT Auth', category: 'Backend & Database', icon: <SiJsonwebtokens size={24} /> },
  { name: 'Socket.io', category: 'Backend & Database', icon: <SiSocketdotio size={24} /> },
  { name: 'WebRTC', category: 'Backend & Database', icon: <SiWebrtc size={24} /> },
  { name: 'Real-Time Systems', category: 'Backend & Database', icon: <FaBolt size={24} /> },
  { name: 'C++', category: 'Programming Languages & Tools', icon: <SiCplusplus size={24} /> },
  { name: 'Python', category: 'Programming Languages & Tools', icon: <SiPython size={24} /> },
  { name: 'Java', category: 'Programming Languages & Tools', icon: <FaJava size={24} /> },
  { name: 'C', category: 'Programming Languages & Tools', icon: <SiC size={24} /> },
  { name: 'Git', category: 'Programming Languages & Tools', icon: <SiGit size={24} /> },
  { name: 'GitHub', category: 'Programming Languages & Tools', icon: <FaGithub size={24} /> },
  { name: 'Figma', category: 'Programming Languages & Tools', icon: <SiFigma size={24} /> },
  { name: 'Docker', category: 'DevOps & Cloud', icon: <SiDocker size={24} /> },
  { name: 'AWS', category: 'DevOps & Cloud', icon: <FaAws size={24} /> },
];

const categories = ['Frontend Development', 'Backend & Database', 'Programming Languages & Tools', 'DevOps & Cloud'];

/* Variants for staggered animation of skill cards */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    y: 8,
    transition: { duration: 0.15 }
  },
};

/* Individual skill card with glowing border trace */
const SkillCard = ({ skill }) => {
  const ref = useRef(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => setGlow((g) => ({ ...g, opacity: 0 }));

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      key={skill.name}
      className={styles.skillCard}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glowing border trace that follows cursor around the card edge */}
      <div
        className={styles.cardGlowTrace}
        style={{
          background: `radial-gradient(circle 80px at ${glow.x}px ${glow.y}px, rgba(255,255,255,0.15), transparent 70%)`,
          opacity: glow.opacity,
        }}
      />
      <div className={styles.iconWrapper}>
        {skill.icon}
      </div>
      <span className={styles.skillName}>{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend Development');

  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section className={styles.skillsSection}>
      <div className={styles.header}>
        <div className={styles.badge}>Expertise</div>
        <h2 className={styles.title}>Skills &amp; Tools</h2>
        <p className={styles.subtitle}>
          Explore the technologies and tools I use to craft exceptional digital experiences.
        </p>
      </div>

      <div className={styles.filterContainer}>
        <div className={styles.tabsWrapper}>
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`${styles.tab} ${activeCategory === cat ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode='wait'>
        <motion.div 
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.gridContainer}
        >
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
