import React from 'react';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export const Author: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                                Este material nació de una frustración común a muchos cristianos: la dificultad para comprender la profundidad de las Cartas de Pablo. Romanos parecía imposible, Gálatas confundía y Efesios, aunque hermoso, parecía distante de la aplicación práctica.
                            </p>
                            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                                El cambio ocurrió al abandonar el enfoque puramente académico y pasar a estudiar las cartas como lo que realmente son: correspondencias reales, para personas reales, con problemas reales. Este cambio de perspectiva transformó todo.
                            </p>
                            <p className="text-slate-800 font-bold text-xl mb-8 leading-relaxed">
                                Todo el conocimiento adquirido con este método fue organizado en los materiales que accederás hoy. El enfoque no está en teología compleja, sino en claridad y aplicación práctica para la vida diaria.
                            </p>
                        </div>

                        <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-start">
                                <CheckIcon />
                                <span className="text-slate-700 font-medium">Más de 10 años de dedicación al estudio de las Escrituras</span>
                            </div>
                            <div className="flex items-start">
                                <CheckIcon />
                                <span className="text-slate-700 font-medium">Materiales ya utilizados por más de 2.300 cristianos</span>
                            </div>
                            <div className="flex items-start">
                                <CheckIcon />
                                <span className="text-slate-700 font-medium">Método validado por pastores y líderes de diversas denominaciones</span>
                            </div>
                            <div className="flex items-start">
                                <CheckIcon />
                                <span className="text-slate-700 font-medium">Contenido basado en fuentes teológicas confiables</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};