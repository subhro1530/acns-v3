import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.css";
import ContactBg from "@/components/ContactBg";

const Contact = () => {
  return (
    <div className={styles.resumeBody}>
          <Navbar />
          <ContactBg/>
    </div>
  );
};

export default Contact;
