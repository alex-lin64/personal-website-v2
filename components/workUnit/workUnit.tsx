import React from "react";

import styles from "./workUnit.module.scss";
import Link from "next/link";

interface WorkProps {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  companyLink: string;
  description: string;
  skills: string[];
}

const WorkUnit: React.FC<WorkProps> = ({
  startDate,
  endDate,
  title,
  company,
  companyLink,
  description,
  skills,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.date}>
          <div className={styles.dateText}>
            {startDate} — {endDate}
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.rows}>
            <div className={styles.title}>
              {title}
              {" • "}
              <Link href={companyLink} target="_blank" className={styles.link}>
                {company} <span className={styles.linkSymbol}>🔗</span>
              </Link>
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
      </div>
    </div>
  );
};

export default WorkUnit;
