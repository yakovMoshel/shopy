"use client"
import React, { useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import axios from 'axios';
import EditPostModal from '../EditPostModal';
import useStore from '../../useStore';

export default function PostItem({ post }) {
  const { _id, title, summary, image, createdAt } = post;

  const isAuthenticated = useStore((state) => state.isAuthenticated);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeactivate = async () => {
    const confirmation = window.confirm("האם אתה בטוח שברצונך למחוק פוסט זה?");
    if (confirmation) {
      try {
        const response = await axios.delete(`/api/post/${_id}`);
        if (response.data.success) {
          setIsDeleted(true);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className={`${styles.item} ${isDeleted ? styles.deleted : ''}`}>
      <Link href={`/UniquePost/${_id}`} legacyBehavior>
        <a className={styles.imageLink}>
          {image && <img src={image} alt={title} className={styles.image} />}
        </a>
      </Link>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.createdAt}>
            {new Date(createdAt).toLocaleDateString()}
          </div>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.summary}>
            {summary}
          </div>
        </div>
        <Link className={styles.readMoreButton} href={`/UniquePost/${_id}`}>
          המשך קריאה
        </Link>
        {isAuthenticated && (
          <div className={styles.buttonContainer}>
            <button onClick={handleDeactivate} className={styles.deactivateButton}>מחק פוסט</button>
            <button onClick={() => setIsModalOpen(true)} className={styles.editButton}>ערוך פוסט</button>
          </div>
        )}
      </div>
      {isModalOpen && (
        <EditPostModal post={post} closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
