import React, { useEffect, useState } from 'react';

interface MobileStickyCtaProps {
    checkoutUrl: string;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ checkoutUrl }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show CTA only after scrolling 300px (past the initial hero view)
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 p-4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none md:hidden transition-all duration-300 ease-in-out">
            <a
                href={checkoutUrl}
                className="pointer-events-auto block w-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold py-3.5 px-6 rounded-xl shadow-2xl text-center uppercase tracking-wider text-sm border-2 border-amber-300/50 animate-pulse hover:scale-[1.02] active:scale-95 transition-transform"
            >
                Quiero Acceso Ahora
            </a>
        </div>
    );
};
