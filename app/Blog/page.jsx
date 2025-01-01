import React from 'react'
import styles from './style.module.scss'
import SideBar from '@/Components/SideBar';
import PostItem from '@/Components/PostItem';
import { getAllPosts } from '@/server/BL/postService';
import { connectToMongo } from '@/server/DL/connectToMongo';
import Head from 'next/head';

export default async function Blog() {

    await connectToMongo();

    const posts = await getAllPosts();
    return (
        <div className={styles.blog}>
             <Head>
                <title>בלוג קונדיטוריה - טיפים ומתכונים לאפייה ועיצוב עוגות מאת הקונדיטורית אילה אברהם</title>
                <meta name="description" content="בלוג הקונדיטוריה של אילה - טיפים שימושיים, מתכונים מפתיעים, והשראה לעוגות ייחודיות. גלו איך לשדרג את העוגות שלכם עם הטיפים והמתכונים שלי." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles.content}>
                <div className={styles.title}>
                    טיפים, מתכונים ועוד
                </div>
                <div className={styles.items}>
                    {posts && posts.map((post) => (
                        <PostItem key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
