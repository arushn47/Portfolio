"use client";
import React, { useState, useEffect, memo } from 'react';
import { cn } from "@/lib/utils"; // Assuming you have a utils file for cn

export function Modal({ card, onClose }) {

  // Effect to close modal on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!card) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/75 z-50 flex justify-center items-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-3xl relative border border-neutral-800"
      >
        <img
          src={card.src}
          alt={card.title}
          className="w-full h-110 object-contain rounded-t-2xl"
        />
         <div className="p-4 bg-black/50 rounded-b-2xl">
           <h2 className="text-xl font-bold text-white text-center">{card.title}</h2>
         </div>
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-2 right-2 bg-neutral-800 text-white rounded-full p-2 hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const Card = memo(({ card, index, hovered, setHovered, onCardClick }) => (
  <div
    onClick={() => onCardClick(card)}
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative overflow-hidden h-72 w-full transition-all duration-200 ease-in-out cursor-pointer",
      hovered !== null && hovered === index && "scale-[1.05]"
    )}>
    <img src={card.src} alt={card.title} className="object-cover absolute inset-0 h-full w-full" />
  </div>
));
Card.displayName = "Card";

export function FocusCards({ cards, onCardClick }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}
