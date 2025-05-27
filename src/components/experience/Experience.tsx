"use client";
import styles from '../../styles/Experience.module.css';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '@/utils/data';

const Experience = () => {

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <p className={styles.subtitle}>My professional journey</p>
        
        <div className={styles.timeline}>
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Briefcase size={20} />
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>
                
                <div className={styles.company}>{exp.company}</div>
                
                <ul className={styles.description}>
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <div className={styles.technologies}>
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;