import React, { useState } from 'react';
import Card from './Card';
import { Card2 } from './Card';
interface CardData {
  title: string;
  imageUrl: string;
}

interface CardListProps {
  cards: CardData[];
}
interface CardData2 {
    title:string;
}
interface CardListProps2{
  cards:CardData2[];
}
const CardList: React.FC<CardListProps> = ({ cards }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  return (<>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  lg:grid-cols-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          isSelected={index === selectedCardIndex}
          onSelect={() => handleCardSelect(index)}
        />
      ))}
    </div>
    </>
  );
};
export const CardList2: React.FC<CardListProps2> = ({ cards }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  return (<>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  lg:grid-cols-6">
      {cards.map((card, index) => (
        <Card2
          key={index}
          title={card.title}
          isSelected={index === selectedCardIndex}
          onSelect={() => handleCardSelect(index)}
        />
      ))}
    </div>
    </>
  );
};


export default CardList;
