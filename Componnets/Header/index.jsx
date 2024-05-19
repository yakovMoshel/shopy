'use client'
import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link';


export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.navMenu}>
                <ul >
                    <li>
                        <Link href="/">
                             בית
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            אודות
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            צור קשר
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            חנות
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            בלוג
                        </Link>
                    </li>
                </ul>
            <div className={styles.logo}>AYALA</div>
            </div>
        </div >
    )
}
