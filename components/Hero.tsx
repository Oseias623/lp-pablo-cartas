import React from 'react';
import ebookMockup from '../assets/bundle-mockup.png';

interface HeroProps {
  checkoutUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ checkoutUrl }) => {
  return (
    <section className="relative overflow-hidden bg-[#0c0a09]">
      {/* Background Ambience - Warm Glow spots */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-amber-600/10 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 py-16 sm:py-24 md:py-32 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Column: Copywriting */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-700/50 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Método Exclusivo
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-50">
            Estudia las <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Cartas de Pablo</span> con Claridad Absoluta.
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 mb-8 max-w-2xl leading-relaxed">
            Deja de sentirte perdido en la teología densa. Descubre guías visuales y prácticas que transforman textos complejos en sabiduría aplicable para tu vida hoy.
          </p>

          <div className="flex flex-col items-center lg:items-start gap-6 w-full">
            <a
              href={checkoutUrl}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-lg rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide btn-shine"
            >
              QUIERO EMPEZAR AHORA
            </a>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <p className="text-stone-400 text-sm font-medium flex items-center gap-2">
                <span>🔒</span> Acceso Inmediato & Vitalicio
              </p>

              <div className="flex items-center gap-4 text-stone-400 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0c0a09] bg-stone-700 flex items-center justify-center text-[10px] overflow-hidden`}>
                      <img src={`https://randomuser.me/api/portraits/thumb/men/${i * 10 + 5}.jpg`} alt="User" />
                    </div>
                  ))}
                </div>
                <p>Más de <span className="text-amber-400 font-bold">2.300 alumnos</span></p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Image (Bundle) */}
        <div className="lg:w-1/2 w-full flex justify-center perspective-1000">
          <div className="relative w-full max-w-xl group">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-purple-500/0 rounded-full blur-[80px] group-hover:bg-amber-500/30 transition-all duration-700"></div>

            <img
              src={ebookMockup}
              alt="Colección Completa - Las Cartas de Pablo"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};