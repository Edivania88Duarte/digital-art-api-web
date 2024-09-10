import React from 'react';
import styles from './gallery.module.css';

interface GalleryArtProps {
    src: string;
    alt: string;
}

const GalleryArt: React.FC<GalleryArtProps> = ({src, alt}) => {
    return (
        <div className={styles.galleryItem}>
            <img src={src} alt={alt} className={styles.image}/>
        </div>
    );
};


export default GalleryArt;