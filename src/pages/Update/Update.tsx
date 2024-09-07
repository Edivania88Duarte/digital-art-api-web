import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

function Atualizar() {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | string>(0);
  const [isAvailable, setIsAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
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
        setIsAvailable(data.isAvailable);
      } catch (err) {
        setError('Erro ao atualizar card de arte');
      } finally {
        setLoading(false);
      }
    };

    fetchArtCard();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedArtCard = {
      title,
      description,
      price: Number(price),
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
      setError(error);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <FormContainer>
      <h2>Atualizar Card de Arte</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <Input
          type="checkbox"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
        />
        Disponível
        <Button type="submit">Atualizar</Button>
      </form>
    </FormContainer>
  );
}

export default Atualizar;
