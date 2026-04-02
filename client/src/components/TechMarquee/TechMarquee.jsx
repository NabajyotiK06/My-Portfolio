import React from 'react';
import { 
  SiReact, SiTypescript, SiJavascript, 
  SiTailwindcss, SiFramer, SiNextdotjs, 
  SiNodedotjs, SiMongodb 
} from 'react-icons/si';
import styles from './TechMarquee.module.css';

const TechMarquee = () => {
  const technologies = [
    { name: 'React.js', icon: <SiReact color="#61DAFB" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
    { name: 'Framer Motion', icon: <SiFramer color="#ffffff" /> },
    { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
    { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> }
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            {technologies.map((tech, index) => (
              <div key={`${i}-${index}`} className={styles.techItem}>
                <span className={styles.icon}>{tech.icon}</span>
                <span className={styles.name}>{tech.name}</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
