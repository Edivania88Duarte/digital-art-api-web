import React from 'react';
import styles from './gallery.module.css';

interface GalleryArtProps {
    src: string;
    alt: string;
}

const GalleryArt: React.FC<GalleryArtProps> = ({src, alt}) => {
    return (
        <div className={styles.image}>
            <img />
        </div>
    );
};


export default GalleryArt;