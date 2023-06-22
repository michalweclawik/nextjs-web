import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Sample title</h1>
        <p className={styles.description}>
          sample text sample text sample text sample text sample text sample
          text sample text sample text
        </p>
        <button className={styles.button}>See my work </button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="demo" className={styles.img} />
      </div>
    </div>
  );
}
