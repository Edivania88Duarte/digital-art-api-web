import React from 'react';
import GalleryArt from '../../components/GalleryArt/GalleryArt';
import styles from '../../components/GalleryArt/gallery.module.css';

// Importa as imagens dos cards de arte
import cardArt1 from '../../assets/digital-art-1.png';
import cardArt2 from '../../assets/interior-design-1.png';
import cardArt3 from '../../assets/lettering-1.png';

const Gallery: React.FC = () => {
    // Array de objetos das imagens das artes
    const cards = [
        { src: cardArt1, alt: 'Arte digital onça' },
        { src: cardArt2, alt: 'Arte design de interior flor' },
        { src: cardArt3, alt: 'Arte lettering hamburgueria' },
    ];

    return (
        <div className={styles.galleryContainer}>
            <h2>Galeria de Artes</h2>
            <div className={styles.gallery}>
                {cards.map((card, index) => (
                    <GalleryArt key={index} src={card.src} alt={card.alt} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
