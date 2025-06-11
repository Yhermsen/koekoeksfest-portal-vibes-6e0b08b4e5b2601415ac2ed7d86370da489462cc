import React from 'react';
import { Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ArtistsPage = () => {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": artists.map((artist, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "MusicGroup",
        "name": artist.name,
        "genre": artist.genre,
        "image": `https://utkoekoeksfest.nl${artist.image}`,
        "description": artist.description
      }
    }))
  };

  const sortedArtists = [...artists].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <section id="artists" className="py-20 bg-gradient-to-b from-black to-gray-900 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-orbitron font-bold text-white mb-4">
              ONZE <span className="text-festival-cyan">ARTIESTEN</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ontdek de geweldige artiesten die optreden op Ut' Koekoeksfest 2025
            </p>
          </div>

          {/* Headliners Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-orbitron font-bold text-white mb-8 text-center">
              <Star className="inline w-8 h-8 text-festival-cyan mr-3" />
              HEADLINERS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedArtists.filter(artist => artist.isHeadliner).map((artist, index) => (
                <div key={index} className="bg-black/50 rounded-lg overflow-hidden shadow-lg card-glow border-2 border-festival-cyan transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <div className="w-full h-64 bg-black/50 flex items-center justify-center overflow-hidden">
                      <img 
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-festival-cyan text-black px-3 py-1 rounded-full text-sm font-bold">
                        HEADLINER
                      </span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-white font-orbitron mb-2">{artist.name}</h3>
                    <p className="text-festival-cyan font-semibold">{artist.genre}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Artists Section */}
          <div>
            <h3 className="text-3xl font-orbitron font-bold text-white mb-8 text-center">
              VOLLEDIGE LINE-UP
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {sortedArtists.filter(artist => !artist.isHeadliner).map((artist, index) => (
                <div key={index} className="bg-black/50 rounded-lg overflow-hidden shadow-lg card-glow border border-gray-700 hover:border-festival-magenta transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <div className="w-full h-48 bg-black/50 flex items-center justify-center overflow-hidden">
                      <img 
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-white font-orbitron mb-1">{artist.name}</h3>
                    <p className="text-gray-400 text-sm">{artist.genre}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtistsPage;
