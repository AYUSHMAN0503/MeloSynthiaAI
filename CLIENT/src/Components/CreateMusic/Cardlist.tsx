import React, { useState } from 'react';
import Card from './Card';
import { Card2 } from './Card';
import { LinearGradient } from 'react-text-gradients';

interface CardData {
  title: string;
  imageUrl: string;
}

interface CardListProps {
  cards: CardData[];
}

interface CardData2 {
  title: string;
}

interface CardListProps2 {
  cards: CardData2[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [selectedCardTitle, setSelectedCardTitle] = useState<string | null>(null);

  const handleCardSelect = (index: number, title: string) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
    setSelectedCardTitle(index === selectedCardIndex ? null : title);

  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            isSelected={index === selectedCardIndex}
            onSelect={() => handleCardSelect(index, card.title)}
          />
        ))}
      </div>
      {selectedCardTitle && (
        <div className='p-2 text-white font-semibold'>
          <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
          Selected : {selectedCardTitle}
          </LinearGradient>
        </div>
      )}
    </>
  );
};

export const CardList2: React.FC<CardListProps2> = ({ cards }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [selectedCardTitle, setSelectedCardTitle] = useState<string | null>(null);

  const handleCardSelect = (index: number, title: string) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
    setSelectedCardTitle(index === selectedCardIndex ? null : title);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6">
        {cards.map((card, index) => (
          <Card2
            key={index}
            title={card.title}
            isSelected={index === selectedCardIndex}
            onSelect={() => handleCardSelect(index, card.title)}
          />
        ))}
      </div>
      
      {selectedCardTitle && (
        <div className='p-2 text-white font-semibold'>
          <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
          Selected : {selectedCardTitle}</LinearGradient>
        </div>
      )}
    </>
  );
};

export default CardList;
