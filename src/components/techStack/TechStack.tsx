"use client";

import styles from '@/styles/TechStack.module.css';
import { TECHNOLOGIES } from '@/utils/data';
import Image from 'next/image';


const TechStack = () => {
  return (
    <section className={styles.techStack} id="tech-stack">
      <div className={styles.container}>
        <h2 className={styles.title}>My Tech Stack</h2>
        <p className={styles.subtitle}>Technologies I've been working with recently</p>
        
        <div className={styles.techGrid}>
          {TECHNOLOGIES.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <div className={styles.iconWrapper}>
              <Image
                src={tech.icon}
                alt={tech.name}
                width={80}
                height={80}
                className={styles.icon}
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;