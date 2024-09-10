// pages/Update.tsx
import React from 'react';
import useUpdateArtCard from '../../hooks/useUpdateArtCard';
import ArtForm from '../../components/ArtCardForm/ArtCardForm';

const Update: React.FC = () => {
  const {
    title, setTitle,
    description, setDescription,
    price, setPrice,
    createdAt, setCreatedAt,
    isAvailable, setIsAvailable,
    loading,
    error,
    handleSubmit
  } = useUpdateArtCard();

  return (
    <ArtForm
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      price={price}
      setPrice={setPrice}
      createdAt={createdAt}
      setCreatedAt={setCreatedAt}
      isAvailable={isAvailable}
      setIsAvailable={setIsAvailable}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
      buttonLabel="Atualizar"
    />
  );
};

export default Update;
