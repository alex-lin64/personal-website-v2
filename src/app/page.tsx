import React from "react";

import Link from "next/link";
import styles from "./page.module.scss";
import ImageModule from "../../components/images_section/images";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <p className={styles.headingText}>
          Who's in Paris? <span className={styles.wave}>👲</span>
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.headshot}>
          <ImageModule imagePath="/assets/profile_pic_fun.png" />
        </div>
      </div>
    </div>
  );
}
