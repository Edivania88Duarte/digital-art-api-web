import React, { useEffect, useState } from 'react';
import styles from './artCardList.module.css';
import { useNavigate } from 'react-router-dom';

interface ArtCard {
  id: number;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  isAvailable: boolean;
}

const ArtCardList: React.FC = () => {
  const [artCards, setArtCards] = useState<ArtCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('http://localhost:3000/art-cards')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        return response.json();
      })
      .then(data => {
        setArtCards(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Função para excluir um card
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/art-cards/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o card');
      }

      // Remover o card do estado local
      setArtCards(prevCards => prevCards.filter(card => card.id !== id));
    } catch (err) {
      setError('Erro ao excluir o card');
    }
  };

  // Função para lidar com o clique de "Editar"
  const handleEditClick = (id: number) => {
    navigate(`/atualizar/${id}`); // Passa o ID do card para a URL
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Houve um erro ao carregar os dados: {error}</p>;
  }

  return (
    <div>
      <h1>Arte Di Maria</h1>
      <ul className='card-container'>
        {artCards.map(card => (
          <li key={card.id} className={styles.card}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <small>{new Date(card.createdAt).toLocaleDateString()}</small>
            <p>Preço: R${card.price.toFixed(2)}</p>
            <p>Disponível: {card.isAvailable ? 'Sim' : 'Não'}</p>
            <button onClick={() => handleEditClick(card.id)}>Editar</button>
            <button onClick={() => handleDelete(card.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtCardList;







