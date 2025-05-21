
const sponsors = [
  { name: "Cruzeiro do Sul Virtual", logo: "https://furiagg.fbitsstatic.net/media/cs.jpg?v=202409271244" },
  { name: "Lenovo Legion", logo: "https://furiagg.fbitsstatic.net/media/lenovo.jpg?v=202409271244" },
  { name: "PokerStars", logo: "https://furiagg.fbitsstatic.net/media/ps.jpg?v=202409271244" },
  { name: "Red Bull", logo: "https://furiagg.fbitsstatic.net/media/redbull.jpg?v=202409271244" },
  { name: "Hellmann's", logo: "https://furiagg.fbitsstatic.net/media/hellmanns.jpg?v=202409271244" },
  { name: "Adidas", logo: "https://furiagg.fbitsstatic.net/media/cs.jpg?v=202409271244" },
];

const SponsorsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="furia-container">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Nossos Patrocinadores
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="h-16 w-full flex items-center justify-center">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
