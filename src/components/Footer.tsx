import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-furia-gray">
      <div className="furia-container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="mb-8 md:mb-0">
            <img 
              src="furiasemfundo.png" 
              alt="FURIA Logo" 
              className="h-16 mb-4"
            />
            <p className="text-furia-light-gray max-w-xs">
              Somos a maior organização de esports do Brasil. Nascemos para conquistar o mundo.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-furia-gold transition-colors">Quem somos</a></li>
              <li><a href="#" className="hover:text-furia-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-furia-gold transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-furia-gold transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/furiagg/" className="text-furia-light-gray hover:text-furia-gold transition-colors" target="_blank">
                <Instagram size={24} />
              </a>
              <a href="https://x.com/FURIA" className="text-furia-light-gray hover:text-furia-gold transition-colors" target="_blank">
                <Twitter size={24} />
              </a>
              <a href="https://www.facebook.com/furiagg" className="text-furia-light-gray hover:text-furia-gold transition-colors" target="_blank">
                <Facebook size={24} />
              </a>
              <a href="https://www.youtube.com/@FURIAgg" className="text-furia-light-gray hover:text-furia-gold transition-colors" target="_blank">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-furia-gray/20 text-center text-sm">
          <p>© 2025 FURIA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
