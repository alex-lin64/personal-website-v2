import React from "react";

import styles from "./projectUnit.module.scss";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  title: string;
  projImage: string;
  projectLink: string;
  description: string;
  builtWith: string[];
}

const ProjectUnit: React.FC<ProjectProps> = ({
  title,
  projImage,
  projectLink,
  description,
  builtWith: builtWith,
}) => {
  return (
    <div className={styles.wrapper}>
      <Link href={projectLink} target="_blank" className={styles.link}>
        <div className={styles.container}>
          <div className={styles.projImage}>
            <div className={styles.imgContainer}>
              <Image
                src={projImage}
                alt={projImage}
                width={540}
                height={960}
                priority={false}
              />
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.title}>
              {title} <span className={styles.linkSymbol}> 🔗</span>
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.builtWiths}>
              {builtWith.map((builtWith, index) => (
                <span key={index} className={styles.builtWith}>
                  {builtWith}
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
