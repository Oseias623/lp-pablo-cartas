
import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Bonuses } from './components/Bonuses';
import { Footer } from './components/Footer';

import { SocialProof } from './components/SocialProof';
import { Faq } from './components/Faq';
import { Author } from './components/Author';
import { FinalCta } from './components/FinalCta';

const App: React.FC = () => {
  // Checkout link
  const checkoutUrl = "https://pay.hotmart.com/N103483225M?checkoutMode=10&bid=1766447525850";

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <main>
        <Hero checkoutUrl={checkoutUrl} />
        <About />
        <SocialProof />
        <Author />
        <Bonuses checkoutUrl={checkoutUrl} />
        <Pricing checkoutUrl={checkoutUrl} />
        <Faq />
        <FinalCta checkoutUrl={checkoutUrl} />
      </main>
      <Footer />
    </div>
  );
};

export default App;