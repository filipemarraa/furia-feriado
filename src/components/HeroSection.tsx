
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 300);
    
    setTimeout(() => {
      if (textRef.current) {
        textRef.current.classList.add('animate-fade-in');
      }
    }, 600);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden">
      {/* Background with watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-5">
        <img 
          src="furiafundo.png" 
          alt="" 
          className="w-4/5 max-w-3xl"
          aria-hidden="true"
        />
      </div>

      <div className="furia-container relative z-10 text-center py-20">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 opacity-0 title-gradient"
        >
          18 de Maio: O Dia em que a <span className="text-furia-gold">Pantera</span> rugiu mais alto
        </h1>
        
        <h2 
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 opacity-0"
        >
          <span className="text-furia-gold">3 títulos.</span> <span className="text-white">1 só dia.</span> <span className="text-furia-red">Agora é feriado nacional.</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p 
            ref={textRef}
            className="text-lg md:text-xl opacity-0 text-furia-light-gray"
          >
            No dia 18/05/2025, a FURIA eternizou seu nome na história do esporte ao conquistar três títulos de peso em apenas um dia: Kings League, R6 e Rocket League. Um feito inédito que mostra que a pantera está em todos os palcos — e sempre no topo.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#championships" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-gold">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
