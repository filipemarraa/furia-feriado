
import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Define a data para 18 de maio de 2026
    const targetDate = new Date('May 18, 2026 00:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        // Se a data já passou
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-16 md:py-24">
      <div className="furia-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Próximo Feriado Nacional da <span className="text-furia-gold">Pantera</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { value: timeLeft.days, label: "Dias" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Minutos" },
            { value: timeLeft.seconds, label: "Segundos" }
          ].map((item, index) => (
            <div key={index} className="w-24 h-24 md:w-32 md:h-32 bg-black border border-furia-gold rounded-lg flex flex-col items-center justify-center">
              <span className="text-3xl md:text-5xl font-bold text-furia-gold">
                {item.value.toString().padStart(2, '0')}
              </span>
              <span className="text-sm md:text-base text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-lg text-furia-light-gray max-w-2xl mx-auto">
          Marque na agenda o próximo 18 de maio e prepare-se para celebrar o dia histórico em que a FURIA conquistou três títulos de uma só vez.
        </p>
      </div>
    </section>
  );
};

export default CountdownSection;
