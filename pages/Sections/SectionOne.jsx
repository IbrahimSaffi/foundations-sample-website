import React from 'react'
import styles from '../../styles/Home.module.css'

export default function SectionOne() {
  return (
    <div className={styles.secOne}>
        <h1 className={styles.heading}>
            Trade Option, Earn Yield
        </h1>
        <p className={styles.para}>
        Decentralized options protocol revolutionizing market-driven pricing and capital efficient returns for all
        </p>
        <button className={styles.btn}>
          Trade
        </button>
        <div className={styles.imgContainer}>
        <img className={styles.centerImg} src="/hero-img1.webp" alt="" />
        </div>
        <img className={styles.sideImg} src="/hero-img2.webp" alt="" />
    </div>
  )
}
