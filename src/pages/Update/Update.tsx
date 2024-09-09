import React from 'react';
import useUpdateArtCard from '../../hooks/useUpdateArtCard';
import styles from './update.module.css';

const Update: React.FC = () => {
  const {
    title, setTitle,
    description, setDescription,
    price, setPrice,
    createdAt, setCreatedAt,
    isAvailable, setIsAvailable,
    loading,
    error,
    handleSubmit,
  } = useUpdateArtCard();

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

        {/* Campo de data */}
        <input
          className={styles.inputField}
          type="date"
          value={createdAt.split('/').reverse().join('-')} // Formato DD/MM/YYYY para YYYY-MM-DD no input de data
          onChange={(e) => setCreatedAt(e.target.value)}
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
};

export default Update;
