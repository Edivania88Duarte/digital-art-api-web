import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ArtCard {
  id: number;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  isAvailable: boolean;
}

const useArtCardList = () => {
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

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/art-cards/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o card');
      }

      setArtCards(prevCards => prevCards.filter(card => card.id !== id));
    } catch (err) {
      setError('Erro ao excluir o card');
    }
  };

  const handleEditClick = (id: number) => {
    navigate(`/atualizar/${id}`);
  };

  return {
    artCards,
    loading,
    error,
    handleDelete,
    handleEditClick,
  };
};

export default useArtCardList;
