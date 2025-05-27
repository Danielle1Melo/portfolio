import Link from 'next/link';
import styles from '@/styles/Footer.module.css';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { NAVLINKS, SOCIALLINKS } from '@/utils/data';

const Footer = () => {
  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Dani Melo</span>
          </div>
          
          <div className={styles.contact}>
            <p>+55 (69) 98124-1520</p>
            <p>danielleesilva.4@gmail.com</p>
          </div>
          
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
        </div>
        
        <div className={styles.bottom}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
                {NAVLINKS.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          
          <p className={styles.copyright}>
            Designed and built by <a href="#">Dani Melo</a> with <span>❤️</span> & <span>☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;