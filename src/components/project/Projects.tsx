"use client";

import { useState } from 'react';
import styles from '../../styles/Projects.module.css';
import ProjectCard from '@/components/projectCard/ProjectCard';
import  SmartCities  from "@/assets/images/smartCities.png"
import  Truck  from "@/assets/images/webSiteTruck.png"
import  FrotaSmart  from "@/assets/images/frotaSmart.png"
import  HzcProject  from "@/assets/images/hzcProject.png"

const Projects = () => {
  const [filter, setFilter] = useState('web');

  const projects = [
    {
      id: 1,
      title: 'Web Site Truck',
      description: 'This project simulates a trucking service platform, designed to practice web development skills. With an intuitive and responsive interface, it uses NextJs and CSS modules for study and learning purposes.',
      image: Truck,
      technologies: ['NextJs', 'TypeScript', 'Css Modules'],
      liveUrl: 'https://websitetruck.vercel.app/',
      codeUrl: 'https://github.com/Danielle1Melo/webSite-Truck?tab=readme-ov-file',
      category: 'web'
    },
    
    {
      id: 2,
      title: 'Smart Cities',
      description: 'This project contains an exercise developed for the Front-End discipline, with the objective of creating a simple institutional website using HTML and CSS.',
      image: SmartCities,
      technologies: ['HTML', 'CSS'],
      liveUrl: 'https://danielle1melo.github.io/WebsiteSmartCities/',
      codeUrl: 'https://github.com/Danielle1Melo/WebsiteSmartCities?tab=readme-ov-file',
      category: 'web'
    },
    {
      id: 3,
      title: 'Frota Smart',
      description: 'Frota Smart is a fictitious vehicle tracking company, and the objective was to create an intuitive dashboard, with features such as historical monitoring, map, alerts and user and vehicle management.',
      image: FrotaSmart,
      technologies: ['Figma'],
      liveUrl: 'https://www.figma.com/design/EfkAhICA1xtFyOBkLx5gZz/Rastreamento-Veicular?node-id=0-1&p=f&t=Q2h8VmbnDiKDvWlY-0',
      category: 'figma'
    },
    {
      id: 4,
      title: 'HZC Project',
      description: 'The HZC project is a web platform developed with the aim of learning and applying the concepts of Flexbox and Grid.',
      image: HzcProject,
      technologies: ['HTML', 'CSS', 'Flexbox', 'Grid', 'Responsive Design'],
      liveUrl: 'https://danielle1melo.github.io/HZCWorld/',
      codeUrl: 'https://github.com/Danielle1Melo/HZCWorld',
      category: 'web'
    },
  ];

  const filteredProjects = projects.filter(project => project.category === filter);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>Things I've built so far</p>
        
        <div className={styles.filterContainer}>

          <button 
            className={`${styles.filterBtn} ${filter === 'web' ? styles.active : ''}`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'figma' ? styles.active : ''}`}
            onClick={() => setFilter('figma')}
          >
            Figma
          </button>
        </div>
        
        <div className={styles.projectGrid}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;