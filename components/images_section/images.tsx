import React from "react";
import styles from "./images.module.scss";

export default function ImageModule() {
  return (
    <div className={styles.containter}>
      <div className={styles.item}>
        <img src="profile_pic_fun.jpg" />
        {/* <img src="profile_pic_prof.jpg" /> */}
      </div>
    </div>
  );
}
