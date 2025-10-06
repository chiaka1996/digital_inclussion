"use client";

import { ProjectDetails } from '@/components/ProjectDetails';
import { ProjectGrid } from '@/components/ProjectGrid';
import { cardData } from '@/lib/cardData';
import { AnimatePresence } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';

export default function App() {
  // State to track the currently selected card ID (our simplified routing)
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  // Function to find the selected card and its neighbors
  const { card, prevCard, nextCard } = useMemo(() => {
    if (!selectedCardId) return { card: null, prevCard: null, nextCard: null };
    
    const currentIndex = cardData.findIndex(c => c.id === selectedCardId);
    
    return {
      card: cardData[currentIndex],
      prevCard: currentIndex > 0 ? cardData[currentIndex - 1] : null,
      nextCard: currentIndex < cardData.length - 1 ? cardData[currentIndex + 1] : null,
    };
  }, [selectedCardId]);
  
  const handleSelectCard = useCallback((id: string) => {
    setSelectedCardId(id);
  }, []);
  
  const handleBack = useCallback(() => {
    setSelectedCardId(null);
  }, []);

  // Use the same select function for next/prev navigation
  const handleNavigate = useCallback((id: string) => {
    setSelectedCardId(id);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans">
      
      {/* Custom Tailwind scrollbar styles for the feature section */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }

        /* Track */
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #333;
          border-radius: 10px;
        }

        /* Handle */
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #06b6d4; /* cyan-600 */
          border-radius: 10px;
        }
      `}</style>

      {/* AnimatePresence is essential for the shared layout transition */}
      
      <AnimatePresence mode="wait">
        {card && (
          <ProjectDetails 
            key={card.id} // Key ensures AnimatePresence tracks this component
            card={card} 
            prevCard={prevCard}
            nextCard={nextCard}
            onBack={handleBack}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>



      {/* Only show the grid when no card is selected */}
      {!selectedCardId && (
        <ProjectGrid 
          cards={cardData} 
          onSelect={handleSelectCard} 
        />
      )}
    </div>
  );
}