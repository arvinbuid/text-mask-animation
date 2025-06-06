'use client'

import MaskTextPage from '../../components/MaskText';
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <MaskTextPage />
      <MaskTextPage />
      <MaskTextPage />
      <MaskTextPage />
    </div>
  );
}