"use client";

import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoodreads } from "react-icons/fa";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./footer.module.scss";

import axios from "axios";

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    // Function to fetch repository information from GitHub API
    const fetchRepositoryInfo = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/username/reponame"
        );
        // Extract last updated timestamp
        const updatedTimestamp = response.data.updated_at;
        setLastUpdated(updatedTimestamp);
      } catch (error) {
        console.error("Error fetching repository information:", error);
      }
    };

    fetchRepositoryInfo();
  }, []);

  const pathname = usePathname();

  return (
    <div className={styles.conditional}>
      {pathname === "/archive" ? (
        <div></div>
      ) : (
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
      )}
    </div>
  );
}
