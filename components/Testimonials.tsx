import React from 'react';
import { FEEDBACK_IMAGES } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-gold font-semibold tracking-wider uppercase text-sm">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mt-2">
            O que minhas pacientes dizem
          </h2>
        </div>

        {/* Masonry-like grid for feedbacks */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {FEEDBACK_IMAGES.map((img) => (
            <div key={img.id} className="break-inside-avoid">
              <img 
                src={img.url} 
                alt="Feedback de paciente" 
                className="w-full rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;