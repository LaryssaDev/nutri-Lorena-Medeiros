import React from 'react';
import { ABOUT_IMAGE, EXPERT } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Block */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-gold rounded-2xl z-0 transform -translate-x-2 -translate-y-2"></div>
              <img 
                src={ABOUT_IMAGE} 
                alt="Lorena Medeiros Bastidores" 
                className="relative z-10 w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Text Block */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
              Muito prazer, pode me chamar de <span className="text-brand-gold italic">Lo</span>.
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Meu maior objetivo é fazer você se sentir bem consigo mesma. Sabe aquela roupa que você deixou no fundo do guarda-roupa por não gostar mais de como fica em você? Vamos mudar isso juntas.
              </p>
              <p>
                Sou <strong>Pós-graduada em esportiva e estética</strong> e <strong>Certified Sports Nutritionist (CISSN)</strong>. Mas títulos não definem nosso relacionamento: aqui, você não me verá sendo rigorosa ou prescrevendo coisas impossíveis.
              </p>
              <p>
                Você é parte <strong>ATIVA</strong> do processo. Te ouvir é muito importante para mim.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Pós-graduada em Esportiva e Estética",
                "Certificação Internacional CISSN",
                "Atendimento Presencial (Mooca) e Online",
                "Foco em recuperar sua autoestima"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
                  <span className="text-brand-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;