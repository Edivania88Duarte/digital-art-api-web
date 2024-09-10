import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const useUpdateArtCard = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number | string>(0);
  const [createdAt, setCreatedAt] = useState<string>(new Date().toLocaleDateString('pt-BR'));
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtCard = async () => {
      try {
        const response = await fetch(`http://localhost:3000/art-cards/${Number(id)}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar o card');
        }
        const data = await response.json();

        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);

        // Convertendo a data ISO para o formato brasileiro (DD/MM/YYYY)
        const date = new Date(data.createdAt);
        setCreatedAt(date.toLocaleDateString('pt-BR'));

        setIsAvailable(data.isAvailable);
      } catch (err) {
        setError('Erro ao buscar card de arte');
      } finally {
        setLoading(false);
      }
    };

    fetchArtCard();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convertendo a data do formato (DD/MM/YYYY) para ISO (YYYY-MM-DD) antes de enviar ao backend
    const dateParts = createdAt.split('/');
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

    const updatedArtCard = {
      title,
      description,
      price: Number(price),
      createdAt: formattedDate, // Enviando no formato ISO
      isAvailable,
    };

    try {
      const response = await fetch(`http://localhost:3000/art-cards/${Number(id)}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedArtCard),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar o card');
      }

      navigate('/');
    } catch (err) {
      setError('Erro ao atualizar card de arte');
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    createdAt,
    setCreatedAt,
    isAvailable,
    setIsAvailable,
    loading,
    error,
    handleSubmit,
  };
};

export default useUpdateArtCard;
