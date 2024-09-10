import React from 'react';
import GalleryArt from '../../components/GalleryArt/GalleryArt';
import styles from '../../components/GalleryArt/gallery.module.css';


import cardArt1 from '/src/assets/digital-art-1.png';
import cardArt2 from '/src/assets/interior-design-1.png';
import cardArt3 from '/src/assets/artesDigitais04.png';
import cardArt4 from '/src/assets/artesDigitais02.png';
import cardArt5 from '/src/assets/artesDigitais03.png';
import cardArt6 from '/src/assets/lettering-1.png';
import cardArt7 from '/src/assets/artesDigitais05.png';
import cardArt8 from '/src/assets/desingInteriores02.png';
import cardArt9 from '/src/assets/desingInteriores03.png';
import cardArt10 from '/src/assets/desingInteriores04.png';
import cardArt11 from '/src/assets/desingInteriores05.png';
import cardArt12 from '/src/assets/lettering02.png';
import cardArt13 from '/src/assets/lettering03.png';
import cardArt14 from '/src/assets/artesDigitais01.png';
import cardArt15 from '/src/assets/lettering05.png';


const Gallery: React.FC = () => {
    // Array de objetos das imagens das artes
    const cards = [
        { src: cardArt1, alt: 'Arte digital onça' },
        { src: cardArt2, alt: 'Arte design de interior flor' },
        { src: cardArt3, alt: 'Arte lettering hamburgueria' },
        { src: cardArt4, alt: 'arte 04'},
        { src: cardArt5, alt: 'arte 05' },
        { src: cardArt6, alt: 'arte 06' },
        { src: cardArt7, alt: 'arte 07' },
        { src: cardArt8, alt: 'arte 08' },
        { src: cardArt9, alt: 'arte 09' },
        { src: cardArt10, alt: 'arte 10' },
        { src: cardArt11, alt: 'arte 11' },
        { src: cardArt12, alt: 'arte 12' },
        { src: cardArt13, alt: 'arte 13' },
        { src: cardArt14, alt: 'arte 14' },
        { src: cardArt15, alt: 'arte 15' },
        
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
