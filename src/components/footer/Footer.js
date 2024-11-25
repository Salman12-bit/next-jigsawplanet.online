import React from 'react';
import styles from './footer.module.css'; 
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
        <h3>Programs</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Links</h3>
          <ul>
            <li><Link href="#">Corporate</Link></li>
            <li><Link href="#">One to One</Link></li>
            <li><Link href="#">Consulting</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; 2024 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
