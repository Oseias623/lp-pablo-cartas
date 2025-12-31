import React, { useState } from 'react';

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 last:border-b-0 py-5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={isOpen}
            >
                <h4 className="text-base md:text-lg font-bold text-slate-800 pr-4">{question}</h4>
                <div className="flex-shrink-0 text-amber-500 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>
                    <PlusIcon className="w-6 h-6" />
                </div>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="mt-4 pr-8">
                        <p className="text-slate-600 whitespace-pre-line">{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Faq: React.FC = () => {
    const faqData = [
        {
            question: "¿Necesito conocimientos bíblicos previos?",
            answer: "No. Está diseñado para CUALQUIER persona que quiera entender a Pablo. Desde nuevos creyentes hasta maestros."
        },
        {
            question: "¿Es solo para nuevos cristianos?",
            answer: "No. Funciona igual si eres nuevo o si ya estudiaste Pablo y sigues confundido."
        },
        {
            question: "¿Cuánto tiempo necesito invertir por día?",
            answer: "Estudias a tu ritmo. Puedes avanzar en sesiones de 15-30 minutos cuando tengas tiempo."
        },
        {
            question: "¿Cómo recibo el material?",
            answer: "Inmediatamente por email. PDFs + audios + bonus. Todo digital."
        },
        {
            question: "¿Qué pasa si tengo dudas durante el estudio?",
            answer: "Escríbenos a nuestro soporte. Respondemos en menos de 24 horas."
        },
        {
            question: "¿Sirve si ya estudié Pablo antes y me confundí?",
            answer: "SÍ. Este método prioriza CONTEXTO sobre información académica. Es diferente a lo que viste antes."
        },
        {
            question: "¿El material está completamente en español?",
            answer: "Sí, 100% en español latino neutro (México, Colombia, Argentina, etc.)"
        },
        {
            question: "¿Puedo pedir reembolso si no me sirve?",
            answer: "Sí, hasta 7 días después. Sin justificar. Sin demora."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">Preguntas Frecuentes</h2>
                    <p className="text-base md:text-lg text-slate-600">Resuelve todas tus dudas antes de tomar la decisión que transformará tu jornada de fe. Si tu pregunta no está aquí, contáctanos.</p>
                </div>

                <div className="max-w-3xl mx-auto bg-white p-2 sm:p-6 rounded-xl shadow-lg border border-slate-200">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};