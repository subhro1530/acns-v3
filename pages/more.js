import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/More.module.css";
import MoreBg from "@/components/MoreBg";

const More = () => {
  return (
    <div className={styles.moreBody}>
      <Navbar />
      <MoreBg />
    </div>
  );
};

export default More;
