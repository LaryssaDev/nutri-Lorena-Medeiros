import React from 'react';
import { EXPERT, LIPEDEMA_COMBO } from '../constants';
import { BookOpen, Check, ExternalLink, ArrowRight } from 'lucide-react';

const LipedemaPromo: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto border border-brand-gold/30 rounded-3xl p-8 md:p-12 bg-white/5 backdrop-blur-sm shadow-2xl">
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold tracking-widest uppercase">
                <BookOpen size={14} />
                Material Exclusivo
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                  {LIPEDEMA_COMBO.title}
                </h2>
                <p className="text-brand-gold text-lg font-medium">
                  {LIPEDEMA_COMBO.subtitle}
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {LIPEDEMA_COMBO.description}
              </p>

              <div className="space-y-3 pt-2">
                {LIPEDEMA_COMBO.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[20px]">
                      <Check size={18} className="text-brand-gold" />
                    </div>
                    <span className="text-sm md:text-base text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <a 
                  href={EXPERT.lipedemaLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full md:w-auto gap-3 bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-gold/20"
                >
                  <span>{LIPEDEMA_COMBO.cta}</span>
                  <ArrowRight size={20} />
                </a>
                <p className="text-center md:text-left text-xs text-gray-500 mt-3">
                  Acesso imediato via Eduzz • Compra 100% segura
                </p>
              </div>
            </div>

            {/* Right Visual (Mockup representation) */}
            <div className="hidden md:flex flex-1 justify-center items-center">
               <div className="relative w-full max-w-xs aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl border border-gray-700 flex flex-col items-center justify-center p-8 text-center rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 border-4 border-brand-gold/20 rounded-lg m-2"></div>
                  <BookOpen size={64} className="text-brand-gold mb-6 opacity-80" />
                  <h3 className="text-2xl font-serif text-white mb-2">Combo Lipedema</h3>
                  <p className="text-gray-400 text-sm">Mais de 10 materiais em PDF</p>
                  <div className="mt-8 px-4 py-2 bg-brand-gold text-brand-dark font-bold text-sm rounded-full">
                    Material Digital
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LipedemaPromo;