// import React from 'react';
// import styled from 'styled-components';

// const Input = styled.input`
//   margin-bottom: 10px;
//   padding: 10px;
//   font-size: 16px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
// `;

// interface ArtCardFormProps {
//   title: string;
//   description: string;
//   price: number | string;
//   isAvailable?: boolean; // Opcional, pode não estar presente na criação
//   onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onIsAvailableChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Opcional, pode não estar presente na criação
//   onSubmit: (e: React.FormEvent) => void;
//   buttonText: string; //  "Criar" ou "Atualizar"
// }

// const ArtCardForm: React.FC<ArtCardFormProps> = ({
//   title,
//   description,
//   price,
//   isAvailable,
//   onTitleChange,
//   onDescriptionChange,
//   onPriceChange,
//   onIsAvailableChange,
//   onSubmit,
//   buttonText,
// }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <Input
//         type="text"
//         placeholder="Título"
//         value={title}
//         onChange={onTitleChange}
//         required
//       />
//       <Input
//         type="text"
//         placeholder="Descrição"
//         value={description}
//         onChange={onDescriptionChange}
//         required
//       />
//       <Input
//         type="number"
//         placeholder="Preço"
//         value={price}
//         onChange={onPriceChange}
//         required
//       />
//       {onIsAvailableChange !== undefined && (
//         <div>
//           <Input
//             type="checkbox"
//             checked={isAvailable!}
//             onChange={onIsAvailableChange}
//           />
//           Disponível
//         </div>
//       )}
//       <Button type="submit">{buttonText}</Button>
//     </form>
//   );
// };

// export default ArtCardForm;
