import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCreateArtCard = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [createdAt, setCreatedAt] = useState<string>(new Date().toLocaleDateString('pt-BR')); // Formato brasileiro DD/MM/YYYY
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reformata a data para o formato ISO (YYYY-MM-DD) antes de enviar ao back-end
    const dateParts = createdAt.split('/');
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

    const newArtCard = {
      title,
      description,
      price: parseFloat(price),
      createdAt: formattedDate, // Envia no formato ISO YYYY-MM-DD
      isAvailable,
    };

    await fetch('http://localhost:3000/art-cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArtCard),
    });

    navigate('/');
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
    handleSubmit,
  };
};

export default useCreateArtCard;
