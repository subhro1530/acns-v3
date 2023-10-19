// pages/index.js
import React from "react";
import Navbar from "../components/Navbar";
import SplineArea from "@/components/SplineArea";
import WorksBg from "@/components/WorksBg";

const works = () => {
  return (
    <div>
      <Navbar />
      <WorksBg/>
      {/* Your content goes here */}
    </div>
  );
};

export default works;
