"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";

import { MdWbSunny } from "react-icons/md";
import { TbMoonStars } from "react-icons/tb";

import { useTheme } from "../../context/themeContext";

function Navbar() {
  const pathname = usePathname();

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link
            href="/"
            className={`${styles.a} ${pathname === "/" ? styles.active : ""}`}
          >
            home
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            href="/work"
            className={`${styles.a} ${
              pathname === "/work" ? styles.active : ""
            }`}
          >
            work
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            href="/projects"
            className={`${styles.a} ${
              pathname === "/projects" ? styles.active : ""
            }`}
          >
            projects
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            href="/blog"
            className={`${styles.a} ${
              pathname === "/blog" ? styles.active : ""
            }`}
          >
            blog
          </Link>
        </li>
        <li className={styles.li}>
          <div onClick={toggleTheme} className={styles.theme}>
            {isDarkMode ? <TbMoonStars /> : <MdWbSunny />}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
