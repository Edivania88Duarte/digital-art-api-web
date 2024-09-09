import React from 'react';
import useCreateArtCard from '../../hooks/useCreateArtCard';
import styles from './create.module.css';

const Create: React.FC = () => {
  const {
    title, setTitle,
    description, setDescription,
    price, setPrice,
    isAvailable, setIsAvailable,
    createdAt, setCreatedAt,
    handleSubmit,
  } = useCreateArtCard();

  return (
    <div className={styles.formContainer}>
      <h2>Criar Novo Card de Arte</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.input}
          required
        />

        <input
          type="date"
          value={createdAt} 
          onChange={(e) => setCreatedAt(e.target.value)}
          className={styles.input}
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

        <button type="submit" className={styles.button}>Criar</button>
      </form>
    </div>
  );
};

export default Create;
  