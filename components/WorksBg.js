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
          <div>
            <h3>Bal Adhikar FunQuest</h3> <br />
            <p>
              Welcome to "Bal Adhikar FunQuest" – your passport to a world where
              learning about children's rights is an adventure! Crafted for the
              Smart India Hackathon, this gamified platform turns understanding
              rights into a thrilling quest. Join us in this digital realm,
              where young minds embark on a journey to grasp and celebrate their
              rights in a fun and interactive way. Let the Bal Adhikar FunQuest
              be your guide to empowering the future generation with knowledge
              and excitement!
              <br />
              <br />
              Deployed At: <small>bal-adhikar-funquest.vercel.app</small>
            </p>
            <br />
          </div>
          <Image
            className={styles.img}
            src="/sih.png"
            height={350}
            width={700}
          ></Image>
        </div>
        <div className={styles.block}>
          <div>
            <h3>ClimaGuard</h3> <br />
            <p>
              Welcome to ClimaGuard, your personalized climate control
              headquarters! With ClimaGuard, you're in charge. Set temperature
              limits tailored to your comfort, and let us handle the rest.
              Receive timely notifications, ensuring your space is always just
              the way you like it. Take control, stay informed, and experience
              climate management like never before. Welcome to a world where
              comfort meets convenience – welcome to ClimaGuard.
              <br />
              <br />
              Deployed At: <small>https://climaguard.vercel.app/</small>
            </p>
            <br />
          </div>
          <Image
            className={styles.img}
            src="/climaguard.png"
            height={320}
            width={700}
          ></Image>
        </div>
        {/* Add similar blocks */}
      </div>
    </div>
  );
};

export default WorksBg;
