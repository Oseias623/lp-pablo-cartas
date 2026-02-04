import React from 'react';
// Imports removed: Assets are now loaded from public/ for preloading support

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

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-50 min-h-[3em] sm:min-h-[2.5em]">
            Descubre el <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Secreto de Pablo</span> para Nunca Más Sentirte <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Insuficiente ante Dios.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 mb-8 max-w-2xl leading-relaxed">
            Entiende cómo Pablo liberó a personas comunes de la culpa, la ansiedad y el juicio religioso — <span className="text-amber-400 font-semibold">aplicado a tu vida hoy.</span>
          </p>

          <div className="flex flex-col items-center lg:items-start gap-6 w-full">


            <div className="flex flex-col items-center lg:items-start gap-4 w-full">
              {/* CTA Removed to reduce curiosity clicks */}


              <div className="flex items-center gap-4 text-stone-400 text-sm mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0c0a09] bg-stone-700 flex items-center justify-center text-[10px] overflow-hidden`}>
                      <img src={`https://randomuser.me/api/portraits/thumb/men/${i * 10 + 5}.jpg`} alt="User" width="32" height="32" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p>Más de <span className="text-amber-400 font-bold">2.300 cristianos</span> en Latinoamérica ya estudiaron este material.</p>
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
              src="/hero-desktop.webp"
              srcSet="/hero-mobile.webp 480w, /hero-desktop.webp 800w"
              sizes="(max-width: 768px) 90vw, 550px"
              alt="Colección Completa - Las Cartas de Pablo"
              width={800}
              height={800}
              fetchPriority="high"
              loading="eager"
              decoding="async"
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