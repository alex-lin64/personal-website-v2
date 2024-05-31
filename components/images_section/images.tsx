import React from "react";
import styles from "./images.module.scss";
import Image from "next/image";

interface ImageProps {
  imagePath: string;
}

const ImageModule: React.FC<ImageProps> = ({ imagePath }) => {
  return (
    <div className={styles.containter}>
      <div className={styles.item}>
        <Image
          src={imagePath}
          alt="Fun picture of Alex"
          width={1080}
          height={1920}
        />
      </div>
    </div>
  );
};

export default ImageModule;
