"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import { Menu, X, Github, Twitter, Linkedin } from 'lucide-react';
import { NAVLINKS, SOCIALLINKS } from '@/utils/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Dani Melo</span>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}> 
          <ul className={styles.navList}>
              {NAVLINKS.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div className={styles.social}>
          {SOCIALLINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.href.includes('github') ? 'GitHub' : 'LinkedIn'}
              >
                {link.icon}
              </a>
            ))}          
        </div>

        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;