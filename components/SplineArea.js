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
        <WelcomeText text="Hey there! This is Shaswata Saha, the founder of ACNS... " />
      </div>
      <section className={styles.aboutACNS}>
        <h2>About Me</h2>
        <p>
          Hi, I`&apos;`m Shaswata Saha, a cybersecurity engineer based in India. With a
          rich background in securing systems across various Linux platforms, I
          bring a robust approach to cybersecurity. Alongside my cybersecurity
          endeavors, I`&apos;`m also deeply passionate about web development. My goal
          is to craft websites that are not only technically sound but also
          user-friendly and highly interactive, creating a seamless online
          experience.
        </p>
        <p>
          Living in India has provided me with diverse perspectives, and I
          leverage this cultural richness in my work. My journey as a
          professional has been marked by a commitment to excellence, continuous
          learning, and a relentless pursuit of innovation. I believe in the
          power of technology to make a positive impact, and my work reflects
          this belief.
        </p>
        {/* Add any additional content or styling as needed */}
      </section>
    </div>
  );
};

export default SplineArea;
