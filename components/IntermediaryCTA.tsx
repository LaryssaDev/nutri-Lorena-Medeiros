import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const IntermediaryCTA: React.FC = () => {
  return (
    <section className="py-16 bg-brand-green text-white relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">
          Não deixe para depois a autoestima que você pode recuperar hoje.
        </h2>
        <p className="mb-8 text-green-100 max-w-xl mx-auto">
          A primeira conversa é gratuita, sem compromisso e serve para nos conhecermos. Vamos alinhar suas expectativas?
        </p>
        <div className="flex justify-center">
          <WhatsAppButton 
            text="Quero agendar minha consulta gratuita" 
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default IntermediaryCTA;