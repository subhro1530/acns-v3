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

const ContactIcons = () => {
  const icons = [
    { name: "Email", icon: "email", link: "mailto:shaswata.ssaha@gmail.com" },
    { name: "GitHub", icon: "github", link: "https://github.com/subhro1530" },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/shaswata-saha-74b209251/",
    },
    // Add more icons as needed
  ];

  return (
    <div className={styles.contact}>
      <div className={styles.block}>
        {icons.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={`material-icons ${styles.contactIcon}`}>
              {contact.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
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

      {/* Contact icons */}
      <ContactIcons />
    </div>
  );
};

export default SplineArea;
