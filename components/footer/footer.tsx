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
          "https://api.github.com/repos/alex-lin64/MyWebsite"
        );
        // Extract last updated timestamp
        const updatedTimestamp = response.data.updated_at;
        const updatedDate = updatedTimestamp.split("T")[0];
        setLastUpdated(updatedDate);
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
          <div className={styles.container}>
            <div className={styles.update}>
              last updated on {`${lastUpdated ? lastUpdated : "..."}`}
            </div>
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
          </div>
          <span className={styles.line}></span>
        </div>
      )}
    </div>
  );
}
