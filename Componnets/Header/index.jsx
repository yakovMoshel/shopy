'use client'
import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const path = usePathname()
    return (
        <div className={styles.Header}>
            <div className={styles.navMenu}>
                <ul >
                    <li>
                        <Link href="/" className={path === '/' ? styles.active : ''} >
                            בית
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={path === '/about' ? styles.active : ''}>
                            אודות
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact" className={path === '/Contact' ? styles.active : ''}>
                            צור קשר
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" className={path === '/shop' ? styles.active : ''}>
                            חנות
                        </Link>
                    </li>
                    <li>
                        <Link href="/Blog" className={path === '/Blog' ? styles.active : ''}>
                            בלוג
                        </Link>
                    </li>
                    <li>
                        <Link href="/Favorites" className={path === '/favorites' ? styles.active : ''}>
                            מועדפים
                        </Link>
                    </li>
                </ul>
                <Link href="/" className={path === '/' ? styles.active : ''} >
                    <div className={styles.logo}><img src="AYALA CAKES LOGO.png" alt="" /></div>
                </Link>
            </div>
        </div >
    )
}
