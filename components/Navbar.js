// components/navbar.js
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

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
          <img src="/Full-Logo.png" alt="Logo" className={styles.logo} />
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

          <div className={styles.moreButton}>
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
            {showMoreDropdown && (
              <div className={styles.moreDropdown}>
                <Link
                  href="/links"
                  className={`${styles.materialIcon} ${styles.smallIcon}`}
                ></Link>
                <Link
                  href="/products"
                  className={`${styles.materialIcon} ${styles.smallIcon}`}
                ></Link>
                {/* Add other dropdown links here... */}
              </div>
            )}
          </div>
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
