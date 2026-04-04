import React, { useRef, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import styles from './Projects.module.css';

/* 3D Tilt Card wrapper */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const [glowPos, setGlowPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setGlowPos((p) => ({ ...p, opacity: 0 }));
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
    >
      {/* Iridescent glow that follows the cursor */}
      <div
        className={styles.tiltGlow}
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
          opacity: glowPos.opacity,
        }}
      />
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.header}>
        <div className={styles.badge}>Work</div>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          These are some of the projects I've worked on. I love building things and I'm always looking for new challenges.
        </p>
        <button className={styles.viewAllBtn}>
          View All <ChevronRight size={16} />
        </button>
      </div>

      <div className={styles.projectsContainer}>
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className={styles.projectCard}>
                <div
                  className={styles.imagePlaceholder}
                  style={!project.image ? { background: project.gradient } : {}}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className={styles.projectImage} />
                  ) : (
                    <div className={styles.placeholderText}>Image Placeholder</div>
                  )}
                  {project.hasCarousel && !project.image && (
                    <>
                      <button className={`${styles.carouselBtn} ${styles.left}`}><ChevronLeft size={16} /></button>
                      <button className={`${styles.carouselBtn} ${styles.right}`}><ChevronRight size={16} /></button>
                    </>
                  )}
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <a href={project.githubUrl || "#"} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
                      <SiGithub size={18} />
                    </a>
                  </div>

                  <p className={styles.projectDesc}>
                    {project.description}
                  </p>

                  <div className={styles.techStack}>
                    {project.tech.map((t, i) => (
                      <span key={i} className={styles.techPill}>{t}</span>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <Link to={`/project/${project.id}`} className={`${styles.btn} ${styles.btnPrimary}`}>Details</Link>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`}>
                        Live
                      </a>
                    ) : (
                      <button className={`${styles.btn} ${styles.btnSecondary}`}>Live</button>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
