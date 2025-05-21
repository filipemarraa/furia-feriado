
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md py-2' : 'bg-black/90 py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-furia-gold transition-colors"
          aria-label="Menu"
        >
          <Menu size={28} />
        </button>

        <a href="#" className="flex justify-center">
          <img 
            src="/logo-furia-white.svg" 
            alt="FURIA Logo" 
            className="h-10 md:h-12"
          />
        </a>

        <div className="w-7">
          {/* Placeholder to maintain centered logo */}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Sliding Side Menu */}
      <div className={`fixed top-0 left-0 bottom-0 w-80 md:w-96 bg-black/90 z-50 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex justify-end p-4 border-b border-gray-800">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-furia-gold transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        
        <div className="flex flex-col items-start justify-center h-full px-12 -mt-16">
          <img 
            src="/logo-furia-white.svg" 
            alt="FURIA Logo" 
            className="h-16 mb-10 self-center"
          />
          <nav className="flex flex-col gap-6 text-left w-full">
            <button 
              onClick={() => scrollToSection('kings')} 
              className="text-xl md:text-2xl font-bold text-white hover:text-furia-gold transition-colors text-left"
            >
              Kings League
            </button>
            <button 
              onClick={() => scrollToSection('rainbow-six')} 
              className="text-xl md:text-2xl font-bold text-white hover:text-furia-gold transition-colors text-left"
            >
              Rainbow Six (Air Reload Rio)
            </button>
            <button 
              onClick={() => scrollToSection('rocket-league')} 
              className="text-xl md:text-2xl font-bold text-white hover:text-furia-gold transition-colors text-left"
            >
              Rocket League (RLCS Open 5)
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
