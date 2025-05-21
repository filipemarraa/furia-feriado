import { Instagram } from 'lucide-react';

interface SocialProfile {
  id: string;
  platform: string;
  handle: string;
  followers: string;
  posts: string;
  icon: React.ReactNode;
  imageUrl: string;
  profileUrl: string;
}

const socialProfiles: SocialProfile[] = [
  {
    id: "furiagg",
    platform: "Instagram",
    handle: "@furiagg",
    followers: "943 mil seguidores",
    posts: "5.224 publicações",
    icon: <Instagram size={24} />,
    imageUrl: "/timecs.jpg",
    profileUrl: "https://www.instagram.com/furiagg/"
  },
  {
    id: "furia.football",
    platform: "Instagram",
    handle: "@furia.football",
    followers: "514 mil seguidores",
    posts: "890 publicações",
    icon: <Instagram size={24} />,
    imageUrl: "/timefut.jpg",
    profileUrl: "https://www.instagram.com/furia.football/"
  },
  {
    id: "furia.r6",
    platform: "Instagram",
    handle: "@furia.r6",
    followers: "26.6 mil seguidores",
    posts: "1.135 publicações",
    icon: <Instagram size={24} />,
    imageUrl: "/timer6.jpg",
    profileUrl: "https://www.instagram.com/furia.r6/"
  }
];

const SocialSection = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="furia-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siga a FURIA</h2>
          <p className="text-furia-light-gray max-w-2xl mx-auto">
            Acompanhe o dia a dia da Nação Pantera em todas as nossas redes sociais e fique por dentro das novidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialProfiles.map(profile => (
            <div key={profile.id} className="social-card">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-furia-red to-furia-gold rounded-full flex items-center justify-center">
                    {profile.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{profile.handle}</h3>
                    <p className="text-sm text-furia-gray">{profile.platform}</p>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-furia-light-gray mb-4">
                  <p>{profile.followers}</p>
                  <p>{profile.posts}</p>
                </div>

                <div className="aspect-video bg-furia-gray/20 rounded-md overflow-hidden">
                  <img 
                    src={profile.imageUrl}
                    alt={profile.handle}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="px-6 pb-6">
                <a 
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 border border-furia-gold text-furia-gold rounded-md hover:bg-furia-gold hover:text-black transition-colors"
                >
                  Seguir
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
