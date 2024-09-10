import React from 'react';
import styles from './form.module.css';

interface ArtFormProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  price: number | string;
  setPrice: (value: string) => void;
  createdAt: string; // formato: YYYY-MM-DD
  setCreatedAt: (value: string) => void;
  isAvailable: boolean;
  setIsAvailable: (value: boolean) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonLabel: string;
  loading?: boolean;
  error?: string | null;
}

const ArtForm: React.FC<ArtFormProps> = ({
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
  buttonLabel,
  loading = false,
  error = null,
}) => {
  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  // Converte a data para formato (YYYY-MM-DD)
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedAt(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="date"
          value={createdAt} 
          onChange={handleDateChange}
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
        <button className={styles.button} type="submit">{buttonLabel}</button>
      </form>
    </div>
  );
};

export default ArtForm;
