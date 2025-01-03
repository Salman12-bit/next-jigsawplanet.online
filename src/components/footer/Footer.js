import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <ul className={styles.footerSection}>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="/contact">Privacy Policy</Link></li>
        </ul>
        <div className={styles.footerSection}>
          <p>Contact Us: contact@jigsawplanet.online</p>
          <p>Phone: +92 340 6297732</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; 2024 Jigsawplanet.online All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
