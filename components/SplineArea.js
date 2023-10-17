import React, { useState, useEffect } from "react";
import styles from "../styles/SplineArea.module.css";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

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
        scene="https://prod.spline.design/VQvhnqAjjZ5ITnKM/scene.splinecode"
      />

      {/* Welcome text */}
      <div className={styles.scroll}>
        <Image
          src="/Profile_new.jpg"
          className={styles.profile}
          width={100}
          height={100}
        />
        <WelcomeText text="ACNS: Navigating Cosmic Discoveries Together..." />
      </div>
    </div>
  );
};

export default SplineArea;
