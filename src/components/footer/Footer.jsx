import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Next JS practise</div>
      <div className={styles.social}>
        <Image
          className={styles.icon}
          width={15}
          height={15}
          src="/2.png"
          alt="demo"
        />
        <Image
          className={styles.icon}
          width={15}
          height={15}
          src="/3.png"
          alt="demo"
        />
        <Image
          className={styles.icon}
          width={15}
          height={15}
          src="/1.png"
          alt="demo"
        />
        <Image
          className={styles.icon}
          width={15}
          height={15}
          src="/4.png"
          alt="demo"
        />
      </div>
    </div>
  );
};

export default Footer;
