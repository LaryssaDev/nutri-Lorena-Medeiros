import React from 'react';
import { HERO_IMAGE, EXPERT } from '../constants';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-10 md:justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Lorena Medeiros Nutricionista" 
          className="w-full h-full object-cover object-top opacity-60 md:opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center md:text-left md:px-12 lg:px-24">
        <div className="max-w-2xl fade-in">
          <span className="inline-block py-1 px-3 border border-brand-gold/50 text-brand-gold rounded-full text-xs font-medium tracking-wider mb-4 uppercase">
            {EXPERT.location}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
            Eu sou <span className="text-brand-gold">Lorena Medeiros</span>,<br /> sua nova Nutricionista.
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
            Nutrição esportiva e estética sem terrorismo. Recupere sua autoestima vestindo aquela roupa que você ama, com um plano alimentar que respeita sua rotina.
          </p>

          <div className="flex flex-col items-center md:items-start gap-3">
            <WhatsAppButton 
              text="Agendar primeira consulta gratuita" 
              subtext="Resposta rápida • Sem compromisso"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;