import React from "react";

import Link from "next/link";
import styles from "./page.module.scss";
import ImageModule from "../../components/images_section/images";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <p className={styles.headingText}>
          {" "}
          Hello, I'm Alex <span className={styles.wave}>👋</span>
        </p>
        <p className={styles.subheadingText}>software engineer</p>
        <p className={styles.subheadingText}>business man</p>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyText}>
          I am a software engineer at{" "}
          <Link
            target="_blank"
            className={styles.link}
            href="https://google.com/"
          >
            Google.
          </Link>{" "}
        </div>

        <div className={styles.bodyText}>
          Previously, I graduated in Computer Science from Brown University and
          I interned at a{" "}
          <Link
            target="_blank"
            className={styles.link}
            href="https://bostonfusion.com/"
          >
            defense-contractor
          </Link>{" "}
          as a machine learning engineer and a medical tech startup{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://bostonmds.com/"
          >
            startup
          </Link>{" "}
          as a backend engineer.
        </div>

        <div className={styles.bodyText}>
          These days, I am focused on building an ecommerce company, training
          BJJ, and enjoying life.
        </div>
        <div className={styles.bodyText}>
          When I have time to spare, I love to play{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://www.youtube.com/watch?v=pMJ0-1GGf5k&ab_channel=penabaza"
          >
            <div className={styles.tennis}>tennis</div>
          </Link>
          ,{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://www.maangchi.com/"
          >
            <div className={styles.cook}>cook</div>
          </Link>{" "}
          fancy meals, and{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://www.youtube.com/watch?v=slDJF2d0NTE"
          >
            <div className={styles.languages}>read about ancient history</div>
          </Link>
          .
        </div>
        <div className={styles.bodyText}>
          Shoot me an email at{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="mailto:lpecommerce2@brown.edu"
          >
            lpecommerce2@gmail.com
          </Link>{" "}
          for business inquiries 😉
        </div>

        <div className={styles.headshot}>
          <ImageModule imagePath="/assets/profile_pic_fun.png" />
        </div>
      </div>
    </div>
  );
}
