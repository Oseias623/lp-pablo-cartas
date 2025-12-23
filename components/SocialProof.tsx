
import React from 'react';
import { testimonials } from '../constants';

const StarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const AvatarIcon: React.FC = () => (
  <div className="h-12 w-12 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </div>
);


interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, location, quote }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col h-full">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
    <p className="text-slate-600 mb-6 italic flex-grow">"{quote}"</p>
    <div className="flex items-center mt-auto">
      <AvatarIcon />
      <div className="ml-4">
        <p className="font-bold text-slate-800">{name}</p>
        <p className="text-sm text-slate-500">{role}, {location}</p>
      </div>
    </div>
  </div>
);


export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Cristianos que Finalmente Entendieron a Pablo
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Mira lo que dicen algunas de las más de 2.300 personas que ya accedieron a este material y transformaron su comprensión de las Escrituras.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} name={testimonial.name} role={testimonial.role} location={testimonial.location} quote={testimonial.quote} />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-slate-600 font-semibold">⭐ Evaluación media: 4.9/5 basada en 847 evaluaciones</p>
        </div>
      </div>
    </section>
  );
};