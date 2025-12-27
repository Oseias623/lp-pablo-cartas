import React, { Suspense } from 'react';
import { Hero } from './components/Hero';
import { Identification } from './components/Identification';

// Lazy load components below the fold
const SocialProof = React.lazy(() => import('./components/SocialProof').then(module => ({ default: module.SocialProof })));
const About = React.lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Differentiation = React.lazy(() => import('./components/Differentiation').then(module => ({ default: module.Differentiation })));
const Bonuses = React.lazy(() => import('./components/Bonuses').then(module => ({ default: module.Bonuses })));
const IsThisForMe = React.lazy(() => import('./components/IsThisForMe').then(module => ({ default: module.IsThisForMe })));
const Pricing = React.lazy(() => import('./components/Pricing').then(module => ({ default: module.Pricing })));
const Faq = React.lazy(() => import('./components/Faq').then(module => ({ default: module.Faq })));
const FinalCta = React.lazy(() => import('./components/FinalCta').then(module => ({ default: module.FinalCta })));
const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

const App: React.FC = () => {
  // Checkout link
  const checkoutUrl = "https://pay.hotmart.com/N103483225M?checkoutMode=10&bid=1766447525850";

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <main>
        {/* Critical Render Path - Eagerly Loaded */}
        <Hero checkoutUrl={checkoutUrl} />
        <Identification />

        {/* Deferred Render Path - Lazy Loaded */}
        <Suspense fallback={<div className="py-20 text-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div></div>}>
          <SocialProof checkoutUrl={checkoutUrl} />
          <About />
          <Differentiation />
          <Bonuses checkoutUrl={checkoutUrl} />
          <IsThisForMe />
          <Pricing checkoutUrl={checkoutUrl} />
          <Faq />
          <FinalCta checkoutUrl={checkoutUrl} />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;