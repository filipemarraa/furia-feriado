import { useState } from 'react';
import { Trophy } from 'lucide-react';

interface Championship {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  videoUrl: string;
}

const championships: Championship[] = [
  {
    id: "kings",
    title: "Kings League Brazil",
    description: "A FURIA sagrou-se campeã da primeira edição da Kings League Brazil com uma campanha dominante, sob a presidência de Neymar Jr. Em uma final eletrizante realizada em São Paulo, a equipe mostrou sua força e entrosamento, garantindo o troféu com jogadas criativas e intensidade do início ao fim. A conquista marcou um novo capítulo na história do futebol 7 nacional.",
    imageSrc: "kings.png",
    videoUrl: "https://www.youtube.com/embed/C6GbucItNUY"
  },
  {
    id: "rainbow-six",
    title: "Air Reload Rio – Rainbow Six Siege",
    description: "No evento Air Reload Rio, sediado no Pavilhão 5 do Riocentro, a FURIA enfrentou a equipe CAG Osaka em uma final acirrada de Rainbow Six. A disputa aconteceu em melhor de 3 mapas, com vitórias dominantes em Border (7x4) e Clubhouse (7x5). A Pantera mostrou frieza e excelência tática com rotações cirúrgicas, domínio de pixel e atuações impecáveis do suporte e entry. O MVP ficou com Rappz, com clutchs decisivos e chamadas cirúrgicas. O troféu foi levantado sob chuva de papel picado e aplausos do público emocionado, colocando o Brasil no topo mais uma vez.",
    imageSrc: "r6.png",
    videoUrl: "https://www.youtube.com/embed/XinoyE7skBk"
  },
  {
    id: "rocket-league",
    title: "RLCS 2025 – Rocket League Open 5",
    description: "O trio DRUFINHO, YANXNZ e LOSTT garantiu a vitória no RLCS 2025 Open 5, colocando a FURIA no topo do cenário sul-americano de Rocket League. A equipe superou grandes adversários com atuações impressionantes, demonstrando domínio técnico, jogadas aéreas e entrosamento em alto nível. Com essa conquista, a FURIA reafirma sua força na elite global do Rocket League.",
    imageSrc: "rl.png",
    videoUrl: "https://www.youtube.com/embed/ljHMEAlRt7Q"
  }
];

const ChampionshipsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="championships" className="bg-black py-16 md:py-24">
      <div className="furia-container">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Trophy className="text-furia-gold" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold">Títulos Conquistados</h2>
          <Trophy className="text-furia-gold" size={32} />
        </div>

        <div className="space-y-8 md:space-y-12">
          {championships.map((championship, index) => (
            <div 
              key={championship.id} 
              id={championship.id}
              className="champion-card group"
            >
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                  <img 
                    src={championship.imageSrc} 
                    alt={championship.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                </div>
                <div className="p-6 md:w-1/2 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-furia-gold transition-colors">
                    {championship.title}
                  </h3>
                  <p className="text-furia-light-gray mb-6">
                    {championship.description}
                  </p>
                  <button
                    onClick={() => handleClick(index)}
                    className="self-start border border-furia-gold text-furia-gold py-2 px-4 rounded-md hover:bg-furia-gold hover:text-black transition-colors"
                  >
                    {activeIndex === index ? "Ver Menos" : "Ver Mais"}
                  </button>
                </div>
              </div>
              
              {activeIndex === index && (
                <div className="p-6 animate-fade-in">
                <div className="border-t border-furia-gray pt-6">
                <h4 className="text-xl font-bold mb-4">Highlights</h4>
                <div className="aspect-video w-full rounded overflow-hidden">
                    <iframe
                      src={championship.videoUrl}
                      title={`Highlights - ${championship.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <p className="mt-4 text-furia-light-gray">
        Os momentos mais incríveis desta conquista histórica que entrou para os livros do esporte brasileiro. Confira os lances decisivos e a celebração da vitória.
      </p>
    </div>
  </div>
)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChampionshipsSection