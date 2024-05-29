import React from "react";

import styles from "./archive.module.scss";
import ArchiveTable from "../../../components/archiveTable/archiveTable";

import Link from "next/link";

export default function Archive() {
  return (
    <div className={styles.wrapper}>
      <ArchiveTable />
    </div>
  );
}
