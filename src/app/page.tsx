'use client'

import styles from './page.module.css'

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout."
]

export default function Home() {
  return (
    <div className={styles.container}>
      <MaskText />
      <MaskText />
      <MaskText />
      <MaskText />
    </div>
  );
}

export function MaskText() {
  return (
    <div className={styles.body}>
      {phrases.map((phrase, index) => (
        <div key={index} className={styles.lineMask}>
          <p>{phrase}</p>
        </div>
      ))}
    </div>
  )
}
