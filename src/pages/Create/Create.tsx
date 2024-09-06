import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const Criar: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newArtCard = {
      title,
      description,
      price: parseFloat(price),
    };

    // Fazendo a requisição para criar o novo card
    await fetch('http://localhost:3000/art-cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArtCard),
    });

    navigate('/'); // Redireciona para a página de listagem após criar o item
  };

  return (
    <FormContainer>
      <h2>Criar Novo Card de Arte</h2>
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
        <Button type="submit">Criar</Button>
      </form>
    </FormContainer>
  );
};

export default Criar;
