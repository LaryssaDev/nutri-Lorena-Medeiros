import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import WhyTrust from './components/WhyTrust';
import IntermediaryCTA from './components/IntermediaryCTA';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import LipedemaPromo from './components/LipedemaPromo';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans text-brand-dark bg-brand-light min-h-screen">
      <Hero />
      <About />
      <Results />
      <WhyTrust />
      <IntermediaryCTA />
      <HowItWorks />
      <Testimonials />
      
      {/* Product Highlight Section */}
      <LipedemaPromo />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-brand-light text-center border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-8">
            Vamos começar sua transformação?
          </h2>
          <div className="flex justify-center">
            <WhatsAppButton 
              text="AGENDAR MINHA PRIMEIRA CONSULTA GRATUITA" 
              className="transform scale-110 shadow-xl"
              variant="primary"
            />
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Sem compromisso. Apenas um passo em direção ao seu bem-estar.
          </p>
        </div>
      </section>

      <Footer />
      
      {/* Sticky Floating Button for Mobile/Desktop */}
      <WhatsAppButton variant="floating" />
    </div>
  );
}

export default App;