// pages/Create.tsx
import React from 'react';
import useCreateArtCard from '../../hooks/useCreateArtCard';
import ArtForm from '../../components/ArtCardForm/ArtCardForm';

const Create: React.FC = () => {
  const {
    title, setTitle,
    description, setDescription,
    price, setPrice,
    createdAt, setCreatedAt,
    isAvailable, setIsAvailable,
    handleSubmit
  } = useCreateArtCard();

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
      buttonLabel="Criar"
    />
  );
};

export default Create;
