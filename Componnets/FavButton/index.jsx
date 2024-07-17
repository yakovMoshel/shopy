"use client"
import React, { useState, useEffect } from 'react';
import styles from "./style.module.scss";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function FavButton({ id }) {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const savedFavs = JSON.parse(localStorage.getItem('favProducts')) || [];
        if (savedFavs.includes(id)) {
            setIsFav(true);
        }
    }, [id]);

    const handleFav = () => {
        const savedFavs = JSON.parse(localStorage.getItem('favProducts')) || [];
        if (isFav) {
            const updatedFavs = savedFavs.filter(favId => favId !== id);
            localStorage.setItem('favProducts', JSON.stringify(updatedFavs));
            setIsFav(false);
        } else {
            savedFavs.push(id);
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
