import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            Como funciona a primeira consulta
          </h2>
          <p className="mt-4 text-gray-600">Simples, rápido e 100% online se preferir.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0 transform scale-x-75"></div>

          {STEPS.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-brand-gold flex items-center justify-center mb-6 shadow-sm">
                <span className="text-3xl font-serif font-bold text-brand-gold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
              <p className="text-gray-600 px-4">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 bg-white inline-block px-6 py-2 rounded-full shadow-sm mx-auto border border-gray-100 block w-fit">
          <span className="text-green-600 font-semibold text-sm">✨ Primeira consulta gratuita e sem compromisso</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;