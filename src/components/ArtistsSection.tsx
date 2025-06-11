import { Music, Star, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ArtistsSection = () => {
  const artists = [
    {
      name: 'AURELIA',
      genre: 'EUPHORIC HARDSTYLE',
      country: 'Onbekend',
      image: '/aurelia.png',
      isHeadliner: false,
      description: 'Beschrijving volgt'
    },
    {
      name: 'PARAMETRICZ',
      genre: 'RAWSTYLE',
      country: 'Onbekend',
      image: '/parametricz.png',
      isHeadliner: false,
      description: 'Beschrijving volgt'
    },
    {
      name: 'KILI',
      genre: 'UPTEMPO',
      country: 'Onbekend',
      image: '/kili.png',
      isHeadliner: true,
      description: 'Beschrijving volgt'
    },
    {
      name: 'SYHER',
      genre: '6 YEAR SPECIAL / RAWSTYLE',
      country: 'Onbekend',
      image: '/syher.png',
      isHeadliner: false,
      description: 'Beschrijving volgt'
    },
    {
      name: 'KOZOROG',
      genre: 'RAW CLASSICS',
      country: 'Onbekend',
      image: '/kozorog.png',
      isHeadliner: false,
      description: 'Beschrijving volgt'
    },
    {
      name: 'MATT-NESS',
      genre: 'RAWSTYLE',
      country: 'Onbekend',
      image: '/matt-ness.png',
      isHeadliner: false,
      description: 'Beschrijving volgt'
    },
    {
      name: 'RIZER',
      genre: 'HARDSTYLE CLASSICS',
      country: 'Onbekend',
      image: '/rizer.png',
      isHeadliner: false,
      description: 'Beschrijving volgt'
    },
    {
      name: 'NOCTURNAL',
      genre: 'RAWSTYLE',
      country: 'Onbekend',
      image: '/nocturnal.png',
      isHeadliner: true,
      description: 'Beschrijving volgt'
    },
    {
      name: 'ROELIE',
      genre: 'UPTEMPO',
      country: 'Onbekend',
      image: '/roelie.png',
      isHeadliner: false,
      description: 'Beschrijving volgt'
    },
    {
      name: 'DARK ENTITIES',
      genre: 'RAWSTYLE',
      country: 'Onbekend',
      image: '/lovable-uploads/d4dcaf67-a921-4b33-9f75-afb22163701b.png',
      isHeadliner: true,
      description: 'Beschrijving volgt'
    },
  ];

  return (
    <section id="artists" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold text-white mb-4">
            ARTIEST <span className="text-festival-magenta">LINE-UP</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            De beste hardstyle en hardcore acts op één podium
          </p>
        </div>

        {/* Headliners */}
        <div className="mb-16">
          <h3 className="text-3xl font-orbitron font-bold text-white mb-8 text-center">
            <Star className="inline w-8 h-8 text-festival-cyan mr-3" />
            HEADLINERS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {artists.filter(artist => artist.isHeadliner).map((artist, index) => (
              <Card key={artist.name} className="bg-black/40 border border-gray-700 hover:border-festival-cyan backdrop-blur-lg overflow-hidden card-glow transform hover:scale-105 transition-all duration-300">
                <div className="flex p-4">
                  <div className="w-32 h-32 rounded-lg mr-4 bg-black/50 flex items-center justify-center overflow-hidden">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-orbitron font-bold text-white mb-1">
                      {artist.name}
                    </h4>
                    <p className="text-festival-cyan text-sm font-semibold">{artist.genre}</p>
                    <p className="text-gray-400 text-xs">{artist.country}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Artists (excluding headliners) */}
         <div>
          <h3 className="text-3xl font-orbitron font-bold text-white mb-8 text-center">
            VOLLEDIGE LINE-UP
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {artists.filter(artist => !artist.isHeadliner).map((artist, index) => (
              <Card key={artist.name} className="bg-black/40 border border-gray-700 hover:border-festival-magenta backdrop-blur-lg overflow-hidden card-glow transform hover:scale-105 transition-all duration-300">
                 <div className="flex p-4 items-center">
                   <div className="w-28 h-28 rounded-lg mr-4 bg-black/50 flex items-center justify-center overflow-hidden">
                     <img 
                       src={artist.image} 
                       alt={artist.name}
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div>
                     <h4 className="text-lg font-orbitron font-bold text-white mb-1">
                       {artist.name}
                     </h4>
                     <p className="text-gray-400 text-sm">{artist.genre}</p>
                   </div>
                 </div>
               </Card>
             ))}
           </div>
         </div>

        <div className="text-center mt-12">
          <Link to="/timetable">
            <Button size="lg" className="bg-gradient-to-r from-festival-magenta to-festival-purple hover:from-festival-purple hover:to-festival-magenta text-white font-bold px-8 py-4 rounded-full">
              BEKIJK TIMETABLE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
