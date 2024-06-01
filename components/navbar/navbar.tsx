"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { MdWbSunny } from "react-icons/md";
import { TbMoonStars } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.documentElement.classList.toggle("scroll");
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) {
  //   return <div></div>;
  // }

  return (
    <div className={styles.conditional}>
      <div className={styles.hamburger} onClick={handleMenuToggle}>
        {!menuOpen && <RxHamburgerMenu />}
      </div>
      {menuOpen && (
        <div className={styles.fullscreenMenu}>
          <div className={styles.closeButton} onClick={handleMenuToggle}>
            <IoCloseOutline />
          </div>
          <ul className={styles.fullscreenUl}>
            <li className={styles.fullscreenLi}>
              <Link href="/" onClick={handleMenuToggle}>
                home
              </Link>
            </li>
            <li className={styles.fullscreenLi}>
              <Link href="/work" onClick={handleMenuToggle}>
                work
              </Link>
            </li>
            <li className={styles.fullscreenLi}>
              <Link href="/projects" onClick={handleMenuToggle}>
                projects
              </Link>
            </li>
            <li className={styles.fullscreenLi}>
              <Link href="/archive" onClick={handleMenuToggle}>
                archive
              </Link>
            </li>
            <li className={styles.fullscreenLi}>
              <div
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                }}
              >
                {!mounted ? (
                  <span className={styles.unmounted} onClick={() => null}>
                    <AiOutlineLoading3Quarters />
                  </span>
                ) : theme === "light" || undefined || null ? (
                  <MdWbSunny />
                ) : (
                  <TbMoonStars />
                )}
              </div>
            </li>
          </ul>
        </div>
      )}
      {pathname === "/archive" ? (
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <div className={styles.backstep}>
                <Link className={styles.link} href="/projects">
                  <FaArrowLeftLong />
                </Link>
              </div>
            </li>
            <li className={styles.li}>
              <div
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={styles.theme}
              >
                {!mounted ? (
                  <span className={styles.unmounted} onClick={() => null}>
                    <AiOutlineLoading3Quarters />
                  </span>
                ) : theme === "light" || undefined || null ? (
                  <MdWbSunny />
                ) : (
                  <TbMoonStars />
                )}
              </div>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link
                href="/"
                className={`${styles.a} ${
                  pathname === "/" ? styles.active : ""
                }`}
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
              <div
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={styles.theme}
              >
                {!mounted ? (
                  <span className={styles.unmounted} onClick={() => null}>
                    <AiOutlineLoading3Quarters />
                  </span>
                ) : theme === "light" || undefined || null ? (
                  <MdWbSunny />
                ) : (
                  <TbMoonStars />
                )}
              </div>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
