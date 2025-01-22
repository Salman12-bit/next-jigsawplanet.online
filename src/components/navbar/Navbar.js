"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  // Logout function
  const logout = async () => {
    localStorage.removeItem("key"); // Clear specific item from local storage
    await signOut({
      callbackUrl: "https://jigsawplanet.online/login", // Redirect to production login page
    });
    window.location.href = "https://jigsawplanet.online/login"; // Hard refresh to production login page
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          jigsawplanet
        </Link>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <Link href="/" className={styles.navItem}>
            Home
          </Link>
          <Link href="/contact" className={styles.navItem}>
            Contact
          </Link>
          <Link href="/jigsaw-planet" className={styles.navItem}>
            Puzzle Game
          </Link>
          <Link href="/freezenova" className={styles.navItem}>
            Word Puzzle
          </Link>
          <Link href="/gametheme" className={styles.navItem}>
            Gaming Theme
          </Link>
          {session?.user?.role === "admin" && (
            <>
              <Link href="/userprofile" className={styles.navItem}>
                Change Role
              </Link>
              <Link href="/dashboard" className={styles.navItem}>
                Dashboard
              </Link>
            </>
          )}

          {session?.user ? (
            <button className={styles.button} onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className={styles.navItem}>
                Login
              </Link>
              <Link href="/register" className={styles.navItem}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
