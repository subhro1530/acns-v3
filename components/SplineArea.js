// components/GetStarted.js

import React from "react";
import styles from "../styles/SplineArea.module.css";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SplineArea = () => {
  const [myObj, setMyObj] = useState(null);
  function onLoad(spline) {
    const obj = spline.findObjectById("5bf7fb81-6117-422d-97d1-e247833be1ab");
    // or
    // const obj = spline.findObjectByName('my object');
    spline.setZoom(1.0);
    setMyObj(obj);
  }
  function moveObj() {
    console.log(myObj); // Spline Object => { name: 'my object', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }
    // move the object in 3D space
    myObj.position.x += 10;
  }
  return (
    <>
      <div className={styles.body}>
        <Spline
          className={styles.spline}
          scene="https://prod.spline.design/VQvhnqAjjZ5ITnKM/scene.splinecode"
          onLoad={onLoad}
        />
        <div className={styles.scroll}>
          <Image src="/Profile_new.jpg" className={styles.profile} width={70} height={70}></Image>
          <h1>Hey there! Welcome to ACNS...</h1>
        </div>
      </div>
    </>
  );
};

export default SplineArea;
