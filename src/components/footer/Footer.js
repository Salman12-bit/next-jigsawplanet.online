import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerSection}>
          <Link href="/contact">Contact</Link> <br/>
          <Link href="about">About Us</Link>    <br/>
          <Link href="/gameprivacypolicy">Privacy Policy</Link>
        </p>
        <div className={styles.footerSection}>
          <Link href="https://www.facebook.com/groups/590704540347867/?ref=share&mibextid=NSMWBT" target="_blank">
            <Image
              className={styles.gameImage}
              src="/images/Facebook.webp"
              alt="Join our Facebook group for advanced jigsaw puzzles"
              width={25}
              height={25}
              loading="lazy"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-salman-998256261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <Image
              className={styles.gameImage}
              src="/images/Linkedin.webp"
              alt="Join our Facebook group for advanced jigsaw puzzles"
              width={25}
              height={25}
              loading="lazy"
            />
          </Link>
          <br />
          <Link href="/termservices">Term Of Service</Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; 2024 Jigsawplanet.online All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
