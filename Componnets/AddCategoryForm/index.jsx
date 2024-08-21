"use client"

import React, { useState } from 'react';
import styles from './style.module.scss';

export default function AddCategoryForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        slug: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to add category');
            }
            setFormData({
                name: '',
                description: '',
                slug: '',
                image: ''
            });
            alert('Category added successfully!');
        } catch (error) {
            alert('An error occurred while adding the category');
        }
    };

    return (
        <div className={styles.topProducts}>
            <div className={styles.sideTitle}>
                הוספת קטגוריה חדשה
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="שם הקטגוריה"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                placeholder="Slug"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <textarea
                                name="description"
                                value={formData.description}
                                placeholder="תיאור הקטגוריה"
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                placeholder="URL של התמונה"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className={styles.submitButton}>הוסף קטגוריה</button>
                </form>
            </div>
        </div>
    );
}
