import React, { useState, useEffect } from "react";
import styles from "../styles/More.module.css";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Link from "next/link";

const WelcomeText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      // Display the text one character at a time
      setDisplayText((prevText) => {
        if (prevText.length < text.length) {
          return text.slice(0, prevText.length + 1);
        }
        clearInterval(interval); // Stop the interval when text is fully displayed
        return prevText;
      });
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [text]);

  return <h1>{displayText}</h1>;
};

const MoreBg = () => {
  return (
    <div className={styles.body}>
      {/* Your Spline component */}
      <Spline
        className={styles.spline}
        scene="https://prod.spline.design/oidcKoBkI4yA9a0F/scene.splinecode"
      />

      {/* Welcome text */}
      <div className={styles.scroll}>
        <Image
          src="/Profile_new.jpg"
          className={styles.profile}
          width={100}
          height={100}
        />
        <WelcomeText text="Hey there! Here are some more pages to view... " />
      </div>

      {/* Links */}
      <div className={styles.links}>
        <Link href="/product" className={styles.link}>
          <Image src="/tools.png" height={40} width={40}></Image> <p>Products</p>
        </Link>
        <Link href="/learning" className={styles.link}>
          <Image src="/learn.png" height={40} width={40}></Image>
          <p>Learning</p>
        </Link>
        <Link href="/company" className={styles.link}>
          <Image src="/company.svg" height={40} width={40}></Image>
          <p>Company</p>
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default MoreBg;
