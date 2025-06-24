import React from "react";

import WorkUnit from "../../../components/workUnit/workUnit";
import workData from "../../../public/assets/work";
import styles from "./work.module.scss";
import Link from "next/link";

export default function WorkPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Work</div>
      <div className={styles.container}>
        {workData.map((work, index) => (
          <div key={index} className={styles.units}>
            <WorkUnit
              startDate={work.startDate}
              endDate={work.endDate}
              title={work.title}
              company={work.company}
              companyLink={work.companyLink}
              description={work.description}
              skills={work.skills}
            />
          </div>
        ))}
      </div>
      <div className={styles.closer}>
        <Link
          href="./alex_lin_resume.pdf"
          className={styles.link}
          target="_blank"
        >
          <span className={styles.closerText}>
            view full resume <span className={styles.linkSymbol}>🔗</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
