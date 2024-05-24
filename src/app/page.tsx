import Link from "next/link";
import styles from "./page.module.scss";
import ImageModule from "../../components/images_section/images";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <p className={styles.headingText}> hey, I'm Alex 👋</p>
        <p className={styles.subheadingText}>student software engineer</p>
      </div>
      <div className={styles.body}>
        <p className={styles.bodyText}>
          I am a junior pursuing a degree in Computer Science at Brown
          University. This summer, I will be joining{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://www.blackrock.com/us/individual/about-us/about-blackrock?cid=ppc:blk_us:cnr_us_br_core_debate_na_exact_ol:google:brand_nonprod:ol&gad_source=1&gclid=CjwKCAjwr7ayBhAPEiwA6EIGxJWx3PUnyIfnBkTPO5nv7Zw2gibnUQoc_s3XV77a62t8KvbJvloNWBoCl9kQAvD_BwE&gclsrc=aw.ds"
          >
            BlackRock
          </Link>{" "}
          as a software engineer intern. Previously, I interned at a{" "}
          <Link
            target="_blank"
            className={styles.link}
            href="https://bostonfusion.com/"
          >
            defense contractor
          </Link>{" "}
          as a deep learning research programmer and at a{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://bostonmds.com/"
          >
            medical tech startup
          </Link>{" "}
          as a data analyst.
        </p>
        <div className={styles.headshot}>
          <ImageModule />
        </div>

        <p className={styles.bodyText}>
          My main focus these days is two-fold{" "}
          <span className={styles.bolded}>{"(1)"}</span> technical recruiting
          for a full time position and{" "}
          <span className={styles.bolded}>{"(2)"}</span> developing a technical
          startup within the real estate realm as a complement to my experience
          as a licensed salesperson.
        </p>
        <p className={styles.bodyText}>
          When I have time to spare, I love to play{" "}
          <span className={styles.tennisSpan}>tennis</span>,{" "}
          <span className={styles.cookingSpan}>cook</span> fancy meals, and
          learn new <span className={styles.lanugageSpan}>languages</span>.
        </p>
      </div>
    </div>
  );
}
