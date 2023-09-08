import React from 'react';
interface CardProps {
  title: string;
  imageUrl: string;
  onSelect: () => void;
  isSelected: boolean;
}
interface CardProps2 {
  title: string;
  onSelect: () => void;
  isSelected: boolean;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, onSelect, isSelected }) => {
  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 ${isSelected ? 'border-2 border-blue-500 scale-105' : ''}`}
      onClick={onSelect}
    >
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover mb-4 rounded" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
    </div>
  );
};
export default Card;

export const Card2: React.FC<CardProps2> = ({ title, onSelect, isSelected }) => {
  return (
    <div
      className={`bg-white p-2.5 rounded-md shadow-md  cursor-pointer transform transition-transform duration-300 ${isSelected ? 'border-2 border-blue-500 scale-105' : ''}`}
      onClick={onSelect}
    >
    <h2 className="text-xl text-center font-semibold justify-center">{title}</h2>
    </div>
  );
};


