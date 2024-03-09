import React from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.newtonsCradle}>
      <div className={styles.newtonsCradleDot}></div>
      <div className={styles.newtonsCradleDot}></div>
      <div className={styles.newtonsCradleDot}></div>
      <div className={styles.newtonsCradleDot}></div>
    </div>
  );
}
