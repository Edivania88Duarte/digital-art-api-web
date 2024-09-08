import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './update.module.css';

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
    <div className={styles.formContainer}>
      <h2>Atualizar Card de Arte</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className={styles.inputField}
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          className={styles.inputField}
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
          />
          <label className={styles.checkboxLabel}>Disponível</label>
        </div>
        
        <button className={styles.buttonAtualizar} type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default Atualizar;
