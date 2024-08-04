"use client"
import React, { useState, useEffect } from 'react';
import styles from "./style.module.scss";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function FavButton({ productId }) {
    const [isFav, setIsFav] = useState(false);

    useEffect (() => {
        const favorites = JSON.parse(localStorage.getItem('favProducts')) || [];
        setIsFav(favorites.includes(productId));
      }, [productId]);

    const handleFav = () => {
        const savedFavs = JSON.parse(localStorage.getItem('favProducts')) || [];
        if (isFav) {
            const updatedFavs = savedFavs.filter(favId => favId !== productId);
            localStorage.setItem('favProducts', JSON.stringify(updatedFavs));
            setIsFav(false);
        } else {
            savedFavs.push(productId);
            localStorage.setItem('favProducts', JSON.stringify(savedFavs));
            setIsFav(true);
        }
    };

    return (
        <div onClick={handleFav} className={isFav ? styles.favorited : styles.notFavorited}>
            {isFav ? <FaHeart /> : <FaRegHeart />}
        </div>
    );
}
