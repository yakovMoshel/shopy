"use client";
import React, { useEffect } from 'react';
import styles from "./style.module.scss";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useStore from '../../useStore';

export default function FavButton({ productId }) {
    const { favorites, addFavorite, removeFavorite } = useStore();

    useEffect(() => {
        // טוען את המועדפים מ-localStorage בעת טעינת הקומפוננטה
        const savedFavs = JSON.parse(localStorage.getItem('favProducts')) || [];
        savedFavs.forEach(addFavorite);
    }, [addFavorite]);

    const isFav = favorites.includes(productId);

    const handleFav = () => {
        if (isFav) {
            removeFavorite(productId);
        } else {
            addFavorite(productId);
        }
        // עדכון ה-localStorage
        const updatedFavs = isFav 
            ? favorites.filter(id => id !== productId)
            : [...favorites, productId];
        localStorage.setItem('favProducts', JSON.stringify(updatedFavs));
    };

    return (
        <div onClick={handleFav} className={isFav ? styles.favorited : styles.notFavorited}>
            {isFav ? <FaHeart /> : <FaRegHeart />}
        </div>
    );
}