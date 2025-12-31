import React from 'react';

interface UpsellModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUpgrade: () => void;
    onContinue: () => void;
}

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, onUpgrade, onContinue }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative border-2 border-amber-400 transform transition-all animate-fade-in-up"
                onClick={e => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                    aria-label="Fechar modal"
                >
                    <CloseIcon className="h-6 w-6" />
                </button>
                
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-black text-amber-400 uppercase tracking-wider mb-2">Espere! Oferta Única</h2>
                    <p className="text-slate-300 md:text-lg mb-6">
                        Você está a um passo de uma ótima decisão, mas ela pode ser <span className="font-bold">ainda melhor</span>.
                    </p>

                    <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 mb-8">
                        <p className="text-lg md:text-xl font-bold mb-2">
                           Por apenas <span className="text-amber-300">R$10 a mais</span>, leve o Plano Premium Completo!
                        </p>
                        <p className="text-slate-400 text-sm">Receba um arsenal de bônus exclusivos, resumos em podcast e transforme de vez seu estudo bíblico.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={onUpgrade}
                            className="w-full bg-amber-500 text-slate-900 font-bold py-3 px-4 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:bg-amber-400 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm sm:text-lg whitespace-nowrap relative overflow-hidden btn-shine"
                        >
                            SIM, QUERO O UPGRADE AGORA!
                        </button>
                        <button
                            onClick={onContinue}
                            className="text-slate-400 hover:text-white text-sm underline transition-colors"
                        >
                            Não, obrigado. Continuar com o Plano Básico
                        </button>
                    </div>
                </div>
            </div>
            {/* Add keyframes for animation */}
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};