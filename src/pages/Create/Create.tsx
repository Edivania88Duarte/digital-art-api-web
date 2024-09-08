import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './create.module.css'; // Importe o módulo CSS

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
    <div className={styles.formContainer}>
      <h2>Criar Novo Card de Arte</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input} // Adiciona a classe de input
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.input} // Adiciona a classe de input
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.input} // Adiciona a classe de input
          required
        />
        <button type="submit" className={styles.button}>Criar</button> {/* Adiciona a classe de botão */}
      </form>
    </div>
  );
};

export default Criar;
