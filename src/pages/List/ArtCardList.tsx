import React from 'react';
import useArtCardList from '../../hooks/useArtCardList';
import styles from './artCardList.module.css';

const ArtCardList: React.FC = () => {
  const { artCards, loading, error, handleDelete, handleEditClick } = useArtCardList();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Houve um erro ao carregar os dados: {error}</p>;
  }

  return (
    <div>
      <h1>Arte Di Maria</h1>
      <div className={styles.cardContainer}>
        {artCards.map(card => (
          <div key={card.id} className={styles.card}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <p>Preço: R${card.price.toFixed(2)}</p>
            <small>Criação: {new Date(card.createdAt).toLocaleDateString()}</small>
            <p>Disponível: {card.isAvailable ? 'Sim' : 'Não'}</p>
            <div className="buttonContainer">
              <button onClick={() => handleEditClick(card.id)}>Editar</button>
              <button onClick={() => handleDelete(card.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtCardList;
