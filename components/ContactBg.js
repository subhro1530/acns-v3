import React, { useState, useEffect } from "react";
import styles from "../styles/SplineArea.module.css";
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


const SplineArea = () => {
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
        <WelcomeText text="Hey there! Here are some resources to reach me... " />
      </div>

      <div className={styles.links}>
        <Link
          href="https://github.com/subhro1530"
          target="_blank"
          className={styles.link}
        >
          <Image src="/github.png" height={40} width={40}></Image> <p>GitHub</p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/shaswata-saha-74b209251/"
          target="_blank"
          className={styles.link}
        >
          <Image src="/linkedin.png" height={40} width={40}></Image>
          <p>LinkedIn</p>
        </Link>
        <Link
          href="mailto:shaswata.ssaha@gmail.com"
          target="_blank"
          className={styles.link}
        >
          <Image src="/email.png" height={40} width={40}></Image>
          <p>Email</p>
        </Link>
        <Link
          href="https://twitter.com/ShaswataSaha10"
          target="_blank"
          className={styles.link}
        >
          <Image src="/x.png" height={40} width={40}></Image>
          <p>Twitter</p>
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default SplineArea;
