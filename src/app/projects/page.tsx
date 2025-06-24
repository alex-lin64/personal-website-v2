import React from "react";

import ProjectUnit from "../../../components/projectUnit/projectUnit";
import projectData from "../../../public/assets/projects";
import styles from "./projects.module.scss";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Projects</div>
      <div className={styles.container}>
        {projectData.slice(0, 5).map((proj, index) => (
          <div key={index} className={styles.units}>
            <ProjectUnit
              title={proj.title}
              projImage={proj.projImage}
              projectLink={proj.projectLink}
              description={proj.description}
              builtWith={proj.builtWith}
            />
          </div>
        ))}
      </div>
      <div className={styles.closer}>
        <Link href="/archive" className={styles.link}>
          <span className={styles.closerText}>
            view project archive <span className={styles.linkSymbol}>🔗</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
