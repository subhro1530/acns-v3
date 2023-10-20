import React, { useState, useEffect } from "react";
import styles from "../styles/SplineArea.module.css";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Link from "next/link";

const WelcomeText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        if (prevText.length < text.length) {
          return text.slice(0, prevText.length + 1);
        }
        clearInterval(interval);
        return prevText;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={styles.scroll2}>
      <Image
        src="/Profile_new.jpg"
        className={styles.profile}
        width={100}
        height={100}
      />
      <h1>{displayText}</h1>
    </div>
  );
};

const ResumeBg = () => {
  return (
    <div className={styles.body}>
      <Spline
        className={styles.spline}
        scene="https://prod.spline.design/LuYFrkq4vDI96Wt8/scene.splinecode"
      />
      <WelcomeText text="Hey there! Here is my Resume/CV... " />
    </div>
  );
};

export default ResumeBg;
