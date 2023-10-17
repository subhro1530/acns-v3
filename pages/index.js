// pages/index.js
import React from "react";
import Navbar from "../components/Navbar";
import SplineArea from "@/components/SplineArea";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SplineArea/>
      {/* Your content goes here */}
    </div>
  );
};

export default Home;
