import React, { useState, useEffect } from "react";
import styles from "../styles/SplineArea.module.css";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

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

const WorksBg = () => {

  return (
    <div className={styles.body}>
      <Spline
        className={styles.spline}
        scene="https://prod.spline.design/AZb1ZFLjTZqVcYHM/scene.splinecode"
      />
      <WelcomeText text="Hey there! Here are some of my coolest stuffs so just scroll down to view them... " />

      <div className={styles.work}>
        <h1>My Works</h1>
        <div className={styles.block}>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quaerat quas blanditiis perferendis distinctio debitis veritatis
            eaque cupiditate. Sapiente vel quisquam est consequatur cupiditate
            beatae voluptatum quo excepturi maiores rerum?
            <br />
            <button className={styles.btn}>Observe</button>
          </h2>
          <Image
            className={styles.img}
            src="/sample.jpg"
            height={300}
            width={700}
          ></Image>
        </div>
        <div className={styles.block}>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quaerat quas blanditiis perferendis distinctio debitis veritatis
            eaque cupiditate. Sapiente vel quisquam est consequatur cupiditate
            beatae voluptatum quo excepturi maiores rerum?
            <br />
            <button className={styles.btn}>Observe</button>
          </h2>
          <Image
            className={styles.img}
            src="/sample.jpg"
            height={300}
            width={700}
          ></Image>
        </div>
        <div className={styles.block}>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quaerat quas blanditiis perferendis distinctio debitis veritatis
            eaque cupiditate. Sapiente vel quisquam est consequatur cupiditate
            beatae voluptatum quo excepturi maiores rerum?
            <br />
            <button className={styles.btn}>Observe</button>
          </h2>
          <Image
            className={styles.img}
            src="/sample.jpg"
            height={300}
            width={700}
          ></Image>
        </div>
        {/* Add similar blocks */}
      </div>
    </div>
  );
};

export default WorksBg;
