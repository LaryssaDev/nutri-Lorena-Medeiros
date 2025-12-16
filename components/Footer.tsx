import React from 'react';
import { EXPERT } from '../constants';
import { Instagram, MapPin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          
          {/* Brand & Location */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif text-white mb-4">{EXPERT.name}</h3>
            <p className="text-sm mb-6 text-gray-400 max-w-xs">{EXPERT.role}. Transformando vidas através da nutrição com empatia e ciência.</p>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
              <span>R. Fernando Falcão, 1111 - Vila Claudia<br/>São Paulo - SP, 03180-003</span>
            </div>
          </div>

          {/* Links & Social */}
          <div className="md:w-1/3">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contato</h4>
            <div className="space-y-3">
              <a href={EXPERT.instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@nutri.lomedeiros</span>
              </a>
              <a href={`mailto:${EXPERT.email}`} className="flex items-center gap-3 hover:text-brand-gold transition-colors">
                <Mail className="w-5 h-5" />
                <span>{EXPERT.email}</span>
              </a>
            </div>
          </div>

          {/* Lipedema Special Link */}
          <div className="md:w-1/3 bg-white/5 p-6 rounded-xl border border-white/10">
            <h4 className="text-brand-gold font-semibold mb-2">Combo Gerenciamento do Lipedema</h4>
            <p className="text-xs mb-4 text-gray-400">
              Acesse mais de 10 materiais em PDF, protocolos de tratamento, e-books e guias completos.
            </p>
            <a 
              href={EXPERT.lipedemaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors"
            >
              Conhecer material <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;