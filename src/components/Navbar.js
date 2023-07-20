import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerRight}>
          <button className={styles.headerButton}>Log In</button>
          <button className={styles.headerButton}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
