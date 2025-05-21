
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChampionshipsSection from "@/components/ChampionshipsSection";
import CountdownSection from "@/components/CountdownSection";
import StoreSection from "@/components/StoreSection";
import SocialSection from "@/components/SocialSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Define o título da página
    document.title = "FURIA - Dia Histórico: 3 Títulos em 24 Horas";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-rubik">
      <Header />
      <HeroSection />
      <ChampionshipsSection />
      <CountdownSection />
      <StoreSection />
      <SocialSection />
      <SponsorsSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
