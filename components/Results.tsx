import React, { useState } from 'react';
import { BEFORE_AFTER_IMAGES } from '../constants';
import { X, ZoomIn } from 'lucide-react';

const Results: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-gold font-semibold tracking-wider uppercase text-sm">Resultados Reais</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mt-2 mb-4">
            Transformações que inspiram
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Veja o que é possível alcançar quando unimos ciência nutricional com constância e respeito ao seu corpo.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BEFORE_AFTER_IMAGES.map((image) => (
            <div 
              key={image.id} 
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md aspect-square bg-white"
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6 uppercase tracking-wide">
          * Resultados podem variar de pessoa para pessoa.
        </p>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Resultado em tela cheia" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;