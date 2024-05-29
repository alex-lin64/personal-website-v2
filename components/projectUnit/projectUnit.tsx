import React from "react";

import styles from "./projectUnit.module.scss";
import Link from "next/link";

interface ProjectProps {
  title: string;
  projImage: string;
  projectLink: string;
  description: string;
  skills: string[];
}

const ProjectUnit: React.FC<ProjectProps> = ({
  title,
  projImage,
  projectLink,
  description,
  skills,
}) => {
  return (
    <div className={styles.wrapper}>
      <Link href={projectLink} target="_blank" className={styles.link}>
        <div className={styles.container}>
          <div className={styles.projImage}>
            <img src={projImage} alt={projImage} />
          </div>
          <div className={styles.body}>
            <div className={styles.title}>
              {title}
              <span className={styles.linkSymbol}>🔗</span>
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.skills}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectUnit;
