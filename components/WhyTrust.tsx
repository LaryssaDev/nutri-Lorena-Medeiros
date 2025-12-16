import React from 'react';
import { FEATURES } from '../constants';
import * as LucideIcons from 'lucide-react';

const WhyTrust: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            Por que confiar no meu trabalho?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => {
            // Dynamically render icon
            const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.Star;
            
            return (
              <div key={feature.id} className="bg-brand-light p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-brand-gold/20">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-gold">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;