import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, Layers, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { projectsData } from '../../data/projectsData';
import styles from './ProjectDetails.module.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find project
  const projectIndex = projectsData.findIndex(p => p.id === parseInt(id));
  const project = projectsData[projectIndex];
  
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.contentWrapper}>
        
        {/* Top Navigation */}
        <div className={styles.topNav}>
          <Link to="/" className={styles.backBtn}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>

        {/* Header Title & Icons */}
        <div className={styles.header}>
          <h1 className={styles.title}>{project.title.split(' – ')[0]}</h1>
          <div className={styles.headerIcons}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                <Globe size={20} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                <SiGithub size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className={styles.heroImageContainer} style={{ background: project.gradient }}>
          {project.image && <img src={project.image} alt={project.title} className={styles.heroImage} />}
        </div>

        {/* Main Body */}
        <div className={styles.layoutGrid}>
          
          {/* Left Column: Overview and Contributors */}
          <div className={styles.leftCol}>
            {/* Overview */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Layers size={18} /> Overview
              </h2>
              <div className={styles.overviewDesc}>
                {project.description}
              </div>
              
              <ul className={styles.bulletsList}>
                {project.overviewBullets?.map((bullet, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <strong>• {bullet.title}</strong> - {bullet.text}
                  </li>
                ))}
              </ul>
            </section>

            {/* Contributors */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Users size={18} /> CONTRIBUTORS
              </h2>
              <div className={styles.contributorsGrid}>
                {project.contributors?.map((contributor, i) => (
                  <div key={i} className={styles.contributorCard}>
                    <div className={styles.contributorHeader}>
                      <div className={styles.avatar}>
                         {contributor.name.charAt(0)}
                      </div>
                      <div className={styles.contributorInfo}>
                        <span className={styles.contributorName}>{contributor.name}</span>
                        <span className={styles.commits}>~ {contributor.commits} commits</span>
                      </div>
                    </div>
                    <div className={styles.progressContainer}>
                       <div className={styles.progressBar}>
                         <div className={styles.progressFill} style={{ width: '100%' }}></div>
                       </div>
                       <span className={styles.progressText}>100% of top contributor</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Project Info and Tech */}
          <div className={styles.rightCol}>
            
            {/* Project Info Card */}
            <div className={styles.infoCard}>
              <h3 className={styles.cardInternalTitle}>PROJECT INFO</h3>
              
              <div className={styles.infoRow}>
                <div className={styles.infoLabel}><Calendar size={14} /> Date</div>
                <div className={styles.infoValue}>{project.date}</div>
              </div>
              
              <div className={styles.infoRow}>
                <div className={styles.infoLabel}><Clock size={14} /> Timeline</div>
                <div className={styles.infoValue}>{project.timeline}</div>
              </div>
              
              <div className={styles.infoRow}>
                <div className={styles.infoLabel}><CheckCircle2 size={14} /> Status</div>
                <div className={styles.infoValue}>
                  <span className={styles.statusBadge}>{project.status}</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className={styles.techSection}>
              <h3 className={styles.cardInternalTitle}>TECHNOLOGIES</h3>
              <div className={styles.techPills}>
                {project.expandedTech?.map((tech, i) => (
                  <span key={i} className={styles.techPill}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className={styles.footerNav}>
          <div className={styles.navSlot}>
            {prevProject && (
              <Link to={`/project/${prevProject.id}`} className={styles.navLink}>
                <span className={styles.navHint}>&lt; Previous Project</span>
                <span className={styles.navTitle}>{prevProject.title.split(' – ')[0]}</span>
              </Link>
            )}
          </div>
          
          <div className={`${styles.navSlot} ${styles.rightSlot}`}>
            {nextProject && (
              <Link to={`/project/${nextProject.id}`} className={styles.navLink}>
                <span className={styles.navHint}>Next Project &gt;</span>
                <span className={styles.navTitle}>{nextProject.title.split(' – ')[0]}</span>
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
