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
      </div>
      <div className={styles.body}>
        <div className={styles.bodyText}>
          I am currently a software engineer at{" "}
          <Link
            target="_blank"
            className={styles.link}
            href="https://google.com/"
          >
            Google.
          </Link>{" "}
        </div>

        <div className={styles.bodyText}>
          Here's my 9-5 corporate cog elevator pitch: I graduated from Brown
          University in 2025 with a computer science degree. Previously, I
          interned at{" "}
          <Link
            target="_blank"
            className={styles.link}
            href="https://www.blackrock.com/us/individual/"
          >
            Blackrock
          </Link>{" "}
          , a{" "}
          <Link
            target="_blank"
            className={styles.link}
            href="https://bostonfusion.com/"
          >
            defense-contractor
          </Link>{" "}
          a medical tech{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://bostonmds.com/"
          >
            startup
          </Link>{" "}
          .
        </div>

        <div className={styles.bodyText}>
          And here are my real thoughts: I roll with other men at least 3 times
          a week, live a meaningul life, and I am learning to tell really good
          stories.
        </div>
        <div className={styles.bodyText}>
          Shoot me an email at{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="mailto:alexlinpov@gmail.com"
          >
            alexlinpov@gmail.com
          </Link>{" "}
          if you have business inquiries 😉
        </div>

        <div className={styles.headshot}>
          <ImageModule imagePath="/assets/profile_pic_fun.png" />
        </div>
      </div>
    </div>
  );
}
