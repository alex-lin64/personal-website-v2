import React from "react";
import styles from "./footer.module.scss";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoodreads } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link
            target="_blank"
            href="https://github.com/alex-lin64"
            className={styles.link}
          >
            <FaGithub />
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/alexlin64/"
            className={styles.link}
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            target="_blank"
            href="mailto:alex_lin@brown.edu"
            className={styles.link}
          >
            <MdEmail />
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            target="_blank"
            href="https://www.goodreads.com/user/show/178637021-alex-lin"
            className={styles.link}
          >
            <FaGoodreads />
          </Link>
        </li>
      </ul>
      <span className={styles.line}></span>
    </div>
  );
}
