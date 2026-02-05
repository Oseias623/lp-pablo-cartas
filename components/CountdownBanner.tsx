import React, { useState, useEffect } from 'react';

export const CountdownBanner: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    if (timeLeft === 0) return null; // Or keep it at 00:00

    return (
        <div className="fixed top-0 inset-x-0 z-50 bg-red-600 text-white py-2 px-4 shadow-md text-center font-bold text-sm md:text-base tracking-wide flex justify-center items-center gap-2 animate-pulse">
            <span>🔥 ESA OFERTA ACABA EN:</span>
            <span className="bg-white text-red-600 px-2 py-0.5 rounded font-mono text-lg">{formatTime(timeLeft)}</span>
            <span>🔥</span>
        </div>
    );
};
