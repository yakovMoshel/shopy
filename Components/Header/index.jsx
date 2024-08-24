'use client'
import React, { useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useStore from '../../useStore';

export default function Header() {
    const isAuthenticated = useStore((state) => state.isAuthenticated);
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();

    const handleToggleBurger = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuItemClick = () => {
        setIsOpen(false);
    };

    const menuItems = [
        { href: '/', label: 'בית' },
        { href: '/about', label: 'אודות' },
        { href: '/shop', label: 'חנות' },
        { href: '/Blog', label: 'בלוג' },
        { href: '/Favorites', label: 'מועדפים' },
    ];

    const renderMobileMenu = () => (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
            {menuItems.map(item => (
                <div key={item.href} className={styles.menuItem}>
                    <Link href={item.href} className={path === item.href ? styles.active : ''} onClick={handleMenuItemClick}>
                        {item.label}
                    </Link>
                </div>
            ))}
            {isAuthenticated && (
                <div className={styles.menuItem}>
                    <Link href="/admin" className={path === '/admin' ? styles.active : ''} onClick={handleMenuItemClick}>
                        ניהול
                    </Link>
                </div>
            )}
        </div>
    );

    const renderDesktopMenu = () => (
        <div className={styles.desktopMenu}>
            {menuItems.map(item => (
                <div key={item.href} className={styles.menuItem}>
                    <Link href={item.href} className={path === item.href ? styles.active : ''}>
                        {item.label}
                    </Link>
                </div>
            ))}
            {isAuthenticated && (
                <div className={styles.menuItem}>
                    <Link href="/admin" className={path === '/admin' ? styles.active : ''}>
                        ניהול
                    </Link>
                </div>
            )}
        </div>
    );

    return (
        <div className={styles.Header}>
            <div className={styles.navMenu}>
                <div className={styles.burger} onClick={handleToggleBurger}>
                    {isOpen ? '✕' : '☰'}
                </div>
                {isOpen ? renderMobileMenu() : renderDesktopMenu()}
                <Link href="/" className={path === '/' ? styles.active : ''}>
                    <div className={styles.logo}>
                        <img src="AYALA CAKES LOGO.png" alt="AYALA CAKES LOGO" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
