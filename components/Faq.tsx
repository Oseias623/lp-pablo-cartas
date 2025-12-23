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
            question: "¿Cómo recibiré el acceso al material?",
            answer: "Inmediatamente después de la confirmación del pago (generalmente en menos de 2 minutos para tarjeta), recibirás un correo electrónico con el enlace de acceso al área de miembros. Allí encontrarás todos los PDFs, audios y bonos organizados para comenzar tus estudios al instante. El acceso es inmediato y puedes descargar los materiales en tu celular, tablet o computadora. Más de 2.300 personas ya hicieron este proceso sin ningún problema."
        },
        {
            question: "¿El contenido es digital o físico?",
            answer: "Todo el contenido es 100% digital. Recibes PDFs para descargar, audios en formato MP3 y acceso a un área exclusiva en línea. La ventaja es que puedes estudiar desde cualquier lugar, en cualquier momento, sin esperar envío. Además, puedes imprimir los PDFs si prefieres estudiar en papel."
        },
        {
            question: "¿Para quién es este material?",
            answer: "Este material fue creado para cristianos que desean entender las Cartas de Pablo de forma clara y práctica. Es perfecto para quien lee la Biblia pero siente dificultad con el lenguaje teológico, líderes de grupos pequeños que necesitan material de apoyo, predicadores buscando ideas para sermones, y estudiantes de teología que quieren una visión práctica de las epístolas. No importa tu nivel de conocimiento bíblico, el material fue hecho para ser accesible a todos. Tenemos alumnos desde nuevos convertidos hasta pastores con décadas de ministerio."
        },
        {
            question: "¿El pago es único o es una suscripción mensual?",
            answer: "El pago es único. Pagas solo una vez y tienes acceso vitalicio al material. No existe cobro recurrente, tasas ocultas o sorpresas en la tarjeta. El valor que ves es el valor que pagas. Punto final."
        },
        {
            question: "¿Cómo realizo el pago?",
            answer: "Aceptamos tarjeta de crédito y otros métodos seguros disponibles en tu región. El ambiente de pago es 100% seguro, encriptado y procesado por una de las plataformas de productos digitales más grandes. Tus datos están completamente protegidos."
        },
        {
            question: "¿El material tiene base teológica confiable?",
            answer: "Absolutamente. Todo el contenido fue desarrollado con base en estudios bíblicos serios y referencias de teólogos respetados. La diferencia es que traducimos ese conocimiento profundo en un lenguaje accesible, sin perder la fidelidad al texto original. Tendrás claridad sin superficialidad, profundidad sin complicación."
        },
        {
            question: "¿El contenido sirve para quien quiere predicar?",
            answer: "Este es uno de los usos más populares del material. Tendrás acceso a bosquejos listos, ideas versículo por versículo, y mapas mentales que facilitan la preparación de sermones y estudios bíblicos. Muchos pastores y líderes ya utilizan nuestros materiales como base para sus ministraciones."
        },
        {
            question: "¿Y si no me gusta? ¿Tengo alguna garantía?",
            answer: "Tienes 7 días de garantía incondicional. Si por cualquier motivo sientes que el material no cumplió tus expectativas, basta enviar un correo solicitando el reembolso. Devolvemos el 100% del valor invertido, sin preguntas y sin burocracia. Si no te adaptas, tu dinero vuelve garantizado."
        },
        {
            question: "¿Por qué el precio es tan bajo? ¿Cuál es el truco?",
            answer: "No hay truco. Este es un precio promocional de lanzamiento para LATAM. Nuestro objetivo ahora es alcanzar el máximo de cristianos posible y construir una base sólida de alumnos satisfechos. Por eso, estamos ofreciendo un valor muy por debajo de lo que el material realmente vale. Quien garantice ahora, asegura este precio para siempre."
        },
        {
            question: "¿Puedo compartir el material con otras personas?",
            answer: "El acceso es individual e intransferible. Cada compra da derecho a un único usuario. Si quieres regalar a alguien, puedes adquirir una segunda licencia. Respetamos mucho el trabajo invertido en la creación de este material y contamos con tu honestidad. Dicho esto, puedes y debes usar el material para enseñar a otros, ya sea en células, predicaciones o estudios en grupo."
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