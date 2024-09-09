import React from 'react';
import styles from './create.module.css'; // Caminho correto para o arquivo CSS

interface ArtCardFormProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  price: number | string;
  setPrice: (value: string) => void;
  createdAt: string;
  setCreatedAt: (value: string) => void;
  isAvailable: boolean;
  setIsAvailable: (value: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
  buttonText: string;
}

const ArtCardForm: React.FC<ArtCardFormProps> = ({
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
  buttonText,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
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
      <button type="submit" className={styles.button}>
        {buttonText}
      </button>
    </form>
  );
};

export default ArtCardForm;
