"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const logout = async () => {
    localStorage.removeItem("key");
    await signOut({
      callbackUrl: "https://jigsawplanet.online/login",
    });
    window.location.href = "https://jigsawplanet.online/login";
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          Jigsawplanet
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
          <Link href="/letter-puzzle" className={styles.navItem}>
            Letter Puzzle
          </Link>
          <Link href="/children-word-puzzle" className={styles.navItem}>
            Word Puzzle
          </Link>
          <Link href="/jigsawblog" className={styles.navItem}>
            Jigsaw Blogs
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
                Sign In
              </Link>
              <Link href="/register" className={styles.navItem}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
