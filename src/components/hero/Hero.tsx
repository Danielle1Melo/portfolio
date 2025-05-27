"use client";

import { useEffect, useState } from 'react';
import styles from '../../styles/Hero.module.css';
import Image from 'next/image';
import Photo from "@/assets/images/daniPhoto.jpeg"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={`${styles.content} ${isLoaded ? styles.loaded : ''}`}>
          <h1 className={styles.greeting}>
            Hi <span className={styles.waveEmoji}>👋</span>,
          </h1>
          <h2 className={styles.intro}>
            My name is 
            <span className={styles.name}> Dani Melo,</span>
          </h2>
          <h2 className={styles.tagline}>Frontend Developer</h2>
        </div>
        
        <div className={`${styles.profileContainer} ${isLoaded ? styles.loaded : ''}`}>
          <div className={styles.profileWrapper}>
            <Image  
              src={Photo} 
              alt="Dani Melo" 
              className={styles.profileImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;