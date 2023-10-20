import Navbar from "../components/Navbar";
import ResumeBg from "../components/ResumeBg";
import React, { useState } from "react";
import styles from "../styles/Resume.module.css";
import { Document, Page, pdfjs } from "react-pdf";

const Resume = () => {
  const resumeUrl = "/resume.pdf"; // Replace with the actual path to your PDF
  const [numPages, setNumPages] = useState(null);

  const openPdf = () => {
    window.open(resumeUrl, "_blank");
  };

  const downloadPdf = () => {
    fetch(resumeUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error downloading PDF:", error));
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={styles.resumeBody}>
      <Navbar />
      <ResumeBg />
      <div className={styles.btns}>
        <button onClick={openPdf}>Open Resume</button>
        <button onClick={downloadPdf}>Download Resume</button>
      </div>
    </div>
  );
};

export default Resume;
