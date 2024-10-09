"use client"
import { useState } from 'react';
import axios from 'axios';
import styles from './style.module.scss';

export default function AddProductForm({ categories }) {
  const [formData, setFormData] = useState({
    name: '',
    subtitle: '',
    description: '',
    price: '',
    category: '',
    images: '',
    colors: '',
    flavors: '',
    isActive: true,
    glutenContent: '',
    dairyContent: '',
    height: '',
    diameter: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const formattedData = {
      ...formData,
      price: parseFloat(formData.price),
      images: formData.images.split(',').map(img => img.trim()),
      colors: formData.colors.split(',').map(color => color.trim()),
      flavors: formData.flavors.split(',').map(flavor => flavor.trim()),
      isActive: formData.isActive === 'true',
      height: parseFloat(formData.height),
      diameter: parseFloat(formData.diameter),
      notDairyOption: formData.dairyContent === 'כן'
    };

    try {
      console.log('Sending data:', JSON.stringify(formattedData, null, 2));
      const response = await axios.post('/api/product', formattedData);
      console.log('Server response:', response.data);
      // Handle success (e.g., clear form, show success message)
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
      setError(error.response?.data?.error || 'An error occurred while submitting the form.');
    }
  };

  return (
    <div className={styles.topProducts}>
      <div className={styles.sideTitle}>
        הוספת מוצר חדש
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="שם המוצר"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                placeholder="כותרת משנה"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <textarea
                name="description"
                value={formData.description}
                placeholder="תיאור המוצר"
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="number"
                name="price"
                value={formData.price}
                placeholder="מחיר"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">בחר קטגוריה</option>
                {categories.map(category => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="images"
                value={formData.images}
                placeholder="תמונות (מופרדות בפסיקים)"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="colors"
                value={formData.colors}
                placeholder="צבעים (מופרדים בפסיקים)"
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="flavors"
                value={formData.flavors}
                placeholder="טעמים (מופרדים בפסיקים)"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>
                פעיל:
                <select
                  name="isActive"
                  value={formData.isActive}
                  onChange={handleChange}
                >
                  <option value="true">כן</option>
                  <option value="false">לא</option>
                </select>
              </label>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <select
                name="glutenContent"
                value={formData.glutenContent}
                onChange={handleChange}
                required
              >
                <option value="">מכיל גלוטן?</option>
                <option value="מכיל גלוטן">מכיל גלוטן</option>
                <option value="ללא גלוטן">ללא גלוטן</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <select
                name="dairyContent"
                value={formData.dairyContent}
                onChange={handleChange}
                required
              >
                <option value="">אופציה לפרווה?</option>
                <option value="כן">כן</option>
                <option value="לא">לא</option>
              </select>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="number"
                name="height"
                value={formData.height}
                placeholder="גובה"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="number"
                name="diameter"
                value={formData.diameter}
                placeholder="קוטר"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.submitButton}>הוסף מוצר</button>
        </form>
      </div>
    </div>
  );
}