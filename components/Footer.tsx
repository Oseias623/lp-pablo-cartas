
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="container mx-auto px-6 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Las Cartas de Pablo. Todos los derechos reservados.</p>
                <p className="mt-2">¿Dudas? Contáctanos: ascartasdepauloo@gmail.com</p>
            </div>
        </footer>
    );
};
