import React from "react";

import styles from "./archiveTable.module.scss";
import projectData from "../../public/assets/projects";
import Link from "next/link";

export default function ArchiveTable() {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.title}>
        <p>all projects</p>
      </div>
      <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th className={styles.tableCells}>year</th>
            <th className={styles.tableCells}>project</th>
            <th className={styles.tableCells}>made at</th>
            <th className={styles.tableCells}>built with</th>
            <th className={styles.tableCells}>link</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((proj, index) => (
            <tr key={index}>
              <td className={styles.tableCells}>{proj.year}</td>
              <td className={styles.tableCells}>{proj.title}</td>
              <td className={styles.tableCells}>{proj.madeAt}</td>
              <td className={styles.tableCells}>
                <div className={styles.builtWiths}>
                  {proj.builtWith.map((builtWith, index) => (
                    <span key={index} className={styles.builtWith}>
                      {builtWith}
                    </span>
                  ))}
                </div>
              </td>
              <td className={styles.tableCells}>
                <Link
                  href={proj.projectLink}
                  className={styles.link}
                  target="_blank"
                >
                  {proj.shortLink}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
