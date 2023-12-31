// components/navbar.js
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  const handleToggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleMoreButtonHover = () => {
    setShowMoreDropdown(true);
  };

  const handleMoreButtonLeave = () => {
    setShowMoreDropdown(false);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          showMobileMenu ? styles.showMobileMenu : ""
        }`}
      >
        <div className={styles.mobileIcon} onClick={handleToggleMobileMenu}>
          {showMobileMenu ? (
            <span className={`${styles.materialIcon} ${styles.smallIcon}`}>
              close
            </span>
          ) : (
            <span className={`${styles.materialIcon} ${styles.smallIcon}`}>
              more_horiz
            </span>
          )}
        </div>

        <Link href="/" className={styles.left}>
          <Image src="/Full-Logo.png" alt="Logo" height={40} width={110} className={styles.logo} />
        </Link>

        <div
          className={`${styles.middle} ${
            showMobileMenu ? styles.showMenu : ""
          }`}
          onMouseEnter={handleMoreButtonHover}
          onMouseLeave={handleMoreButtonLeave}
        >
          <Link href="/">
            <span className={`${styles.materialIcon} ${styles.smallIcon}`}>
              home
            </span>
            Home
          </Link>
          <Link href="/works">
            <span className={`${styles.materialIcon} ${styles.smallIcon}`}>
              work
            </span>
            Works
          </Link>
          <Link href="/resume">
            <span className={`${styles.materialIcon} ${styles.smallIcon}`}>
              description
            </span>
            Resume
          </Link>
          <Link href="/contact">
            <span className={`${styles.materialIcon} ${styles.smallIcon}`}>
              mail
            </span>
            Contact
          </Link>

          <Link href="/more" className={styles.moreButton}>
            {showMobileMenu ? (
              <span className={`${styles.materialIcon} ${styles.smallIcon}`}>
                more_vert
              </span>
            ) : (
              <span className={`${styles.materialIcon} ${styles.smallIcon}`}>
                more_horiz
              </span>
            )}
            {" More "}
          </Link>
        </div>

        <div className={styles.right}>
          <span className={`${styles.materialIcon} ${styles.smallIcon}`}>
            person
          </span>
          <button>Login/Register</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
