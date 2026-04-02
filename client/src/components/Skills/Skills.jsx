import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, 
  SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiMongodb 
} from 'react-icons/si';
import styles from './Skills.module.css';

const skillsData = [
  { name: 'Next.js', category: 'Frontend Development', icon: <SiNextdotjs size={24} /> },
  { name: 'React.js', category: 'Frontend Development', icon: <SiReact size={24} /> },
  { name: 'TypeScript', category: 'Programming Languages & Tools', icon: <SiTypescript size={24} /> },
  { name: 'JavaScript', category: 'Programming Languages & Tools', icon: <SiJavascript size={24} /> },
  { name: 'Tailwind CSS', category: 'Frontend Development', icon: <SiTailwindcss size={24} /> },
  { name: 'Framer Motion', category: 'Frontend Development', icon: <SiFramer size={24} /> },
  { name: 'Node.js', category: 'Backend & Database', icon: <SiNodedotjs size={24} /> },
  { name: 'Express', category: 'Backend & Database', icon: <SiExpress size={24} /> },
  { name: 'MongoDB', category: 'Backend & Database', icon: <SiMongodb size={24} /> },
];

const categories = ['All', 'Frontend Development', 'Backend & Database', 'Programming Languages & Tools'];

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
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.3 }}
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
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = skillsData.filter(skill => 
    activeCategory === 'All' ? true : skill.category === activeCategory
  );

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

      <motion.div layout className={styles.gridContainer}>
        <AnimatePresence mode='popLayout'>
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
