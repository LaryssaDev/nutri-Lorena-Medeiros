import React from 'react';
import { EXPERT } from '../constants';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'floating';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text = "Agendar primeira consulta gratuita", 
  subtext,
  className = "",
  variant = 'primary'
}) => {
  const baseStyles = "transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center font-semibold rounded-full shadow-lg cursor-pointer";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-500 text-white py-4 px-8 w-full md:w-auto uppercase tracking-wide",
    secondary: "bg-brand-gold hover:bg-yellow-500 text-white py-3 px-8 w-full md:w-auto",
    floating: "fixed bottom-6 right-6 z-50 bg-green-600 p-4 rounded-full shadow-2xl animate-bounce"
  };

  if (variant === 'floating') {
    return (
      <a 
        href={EXPERT.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={variants.floating}
        aria-label="Agendar no WhatsApp"
      >
        <MessageCircle size={32} color="white" />
      </a>
    );
  }

  return (
    <a 
      href={EXPERT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <div className="flex items-center justify-center gap-2">
        <MessageCircle size={24} />
        <span>{text}</span>
      </div>
      {subtext && (
        <span className="text-xs font-normal opacity-90 mt-1 block">
          {subtext}
        </span>
      )}
    </a>
  );
};

export default WhatsAppButton;