import React from "react";

import ProjectUnit from "../../../components/projectUnit/projectUnit";
import projectData from "../../../public/assets/projects";
import styles from "./projects.module.scss";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {projectData.map((proj, index) => (
          <div key={index} className={styles.units}>
            <ProjectUnit
              title={proj.title}
              projImage={proj.projImage}
              projectLink={proj.projectLink}
              description={proj.description}
              skills={proj.skills}
            />
          </div>
        ))}
      </div>
      {/* <div className={styles.closer}>
        <Link
          href="./alex_lin_resume.pdf"
          className={styles.link}
          target="_blank"
        >
          <span className={styles.closerText}>
            view full resume <span className={styles.linkSymbol}>🔗</span>
          </span>
        </Link>
      </div> */}
    </div>
  );
}
