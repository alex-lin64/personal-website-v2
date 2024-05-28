import React from "react";
import styles from "./images.module.scss";

interface ImageProps {
  imagePath: string;
}

const ImageModule: React.FC<ImageProps> = ({ imagePath }) => {
  return (
    <div className={styles.containter}>
      <div className={styles.item}>
        <img src={imagePath} />
      </div>
    </div>
  );
};

export default ImageModule;
