
import React from 'react';

const BookIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
            <BookIcon />
            <h1 className="text-lg md:text-2xl font-bold text-slate-900">
            As Cartas de Paulo
            </h1>
        </div>
        <a 
          href="#pricing" 
          className="bg-amber-500 text-slate-900 font-bold py-2 px-3 md:px-4 rounded-lg shadow-md hover:bg-amber-400 transition-colors duration-300 text-sm md:text-base whitespace-nowrap"
        >
          Ver Planos
        </a>
      </div>
    </header>
  );
};
