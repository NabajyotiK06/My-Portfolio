import React, { useRef, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: 'CappyChat',
    gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)',
    description: (
      <>
        Next-generation AI chat platform engineered for <strong>performance</strong> and <strong>scalability</strong>. • <strong>30+ Premium AI Models</strong> - GPT-5, Gemini 2.5,...
      </>
    ),
    tech: ['Next.js 15', 'TypeScript', 'Zustand', 'Appwrite', '+3'],
  },
  {
    id: 2,
    title: 'Bashio',
    gradient: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
    description: (
      <>
        AI-powered CLI tool that converts <strong>plain English into shell commands</strong>. Stop Googling, start doing. • <strong>Natural Language to Shell</strong> - Describ...
      </>
    ),
    tech: ['TypeScript', 'Node.js', 'Claude API', 'OpenAI API', '+3'],
    hasCarousel: true,
  },
  {
    id: 3,
    title: 'ResuMate',
    gradient: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    description: (
      <>
        AI-powered resume builder designed to help job seekers craft <strong>professional, ATS-friendly resumes</strong> with <strong>intelligent optimization</strong>. • Step...
      </>
    ),
    tech: ['React (Vite)', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '+4'],
  },
  {
    id: 4,
    title: 'Quoridor Online',
    gradient: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    description: (
      <>
        A beautiful, animated implementation of the classic strategy board game <strong>Quoridor</strong>, built with Next.js and real-time multiplayer...
      </>
    ),
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '+4'],
  }
];

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
                  style={{ background: project.gradient }}
                >
                  {project.hasCarousel && (
                    <>
                      <button className={`${styles.carouselBtn} ${styles.left}`}><ChevronLeft size={16} /></button>
                      <button className={`${styles.carouselBtn} ${styles.right}`}><ChevronRight size={16} /></button>
                    </>
                  )}
                  <div className={styles.placeholderText}>Image Placeholder</div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <a href="#" className={styles.githubBtn}>
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
                    <button className={`${styles.btn} ${styles.btnPrimary}`}>Details</button>
                    <button className={`${styles.btn} ${styles.btnSecondary}`}>Live</button>
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
