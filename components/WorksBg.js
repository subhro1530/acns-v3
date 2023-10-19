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

const WorksBg = () => {
  return (
    <div className={styles.body}>
      {/* Your Spline component */}
      <Spline
        className={styles.spline}
        scene="https://prod.spline.design/AZb1ZFLjTZqVcYHM/scene.splinecode"
      />

      {/* Welcome text */}
      <div className={styles.scroll}>
        <Image
          src="/Profile_new.jpg"
          className={styles.profile}
          width={100}
          height={100}
        />
        <WelcomeText text="Hey there! Here are some of my coolest stuffs so just scroll down to view them... " />
      </div>
      <div className={styles.work}>
        <h1>My Works</h1>
        <div className={styles.block}>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quaerat quas blanditiis perferendis distinctio debitis veritatis
            eaque cupiditate. Sapiente vel quisquam est consequatur cupiditate
            beatae voluptatum quo excepturi maiores rerum?
          </h2>
          {/* <Image src=""></Image> */}
        </div>
      </div>
    </div>
  );
};

export default WorksBg;
