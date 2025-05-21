
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botão quando a página é rolada para baixo
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Definir a rolagem para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed bottom-6 right-6 z-40 bg-furia-gold text-black p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-opacity-90`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;
