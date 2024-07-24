import React from 'react'
import styles from './style.module.scss'
import SideBar from '@/Componnets/SideBar';
import PostItem from '@/Componnets/PostItem';
import { getAllPosts } from '@/server/BL/postService';
import { connectToMongo } from '@/server/DL/connectToMongo';

export default async function Blog() {

    await connectToMongo();

    const posts = await getAllPosts();
    // console.log({ posts });
    return (
        <div className={styles.blog}>
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
