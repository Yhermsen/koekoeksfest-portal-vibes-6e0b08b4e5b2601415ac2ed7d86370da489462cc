import { Calendar, MapPin, Users, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EditionsSection = () => {
  const editions = [
    {
      year: '2025',
      date: '5 Juli 2025',
      location: 'Siebengewald, Nederland',
      theme: 'Cuckoo Chronicles',
      attendees: '25.000+',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000',
      description: 'De grootste editie tot nu toe met internationale topacts en een volledig nieuwe stage setup.'
    },
    {
      year: '2024',
      date: '6 Juli 2024',
      location: 'Siebengewald, Nederland',
      theme: 'Time Warp',
      attendees: '20.000+',
      status: 'past',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1000',
      description: 'Een onvergetelijke editie met epische laser shows en de beste hardstyle acts van Europa.'
    },
    {
      year: '2023',
      date: '8 Juli 2023',
      location: 'Siebengewald, Nederland',
      theme: 'Genesis',
      attendees: '15.000+',
      status: 'past',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000',
      description: 'De allereerste editie die de basis legde voor wat nu het meest iconische hardstyle festival van Nederland is.'
    }
  ];

  return (
    <section id="editions" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold text-white mb-4">
            FESTIVAL <span className="text-festival-cyan">EDITIES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ontdek de geschiedenis van Ut' Koekoeksfest en beleef elke editie opnieuw
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {editions.map((edition, index) => (
            <Card key={edition.year} className={`bg-black/50 border-2 backdrop-blur-lg overflow-hidden card-glow transform hover:scale-105 transition-all duration-300 ${
              edition.status === 'upcoming' 
                ? 'border-festival-cyan shadow-festival-cyan/30' 
                : 'border-gray-700 hover:border-festival-magenta'
            }`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={edition.image} 
                  alt={`${edition.theme} ${edition.year}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    edition.status === 'upcoming' 
                      ? 'bg-festival-cyan text-black' 
                      : 'bg-gray-700 text-white'
                  }`}>
                    {edition.status === 'upcoming' ? 'BINNENKORT' : 'AFGELOPEN'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-orbitron font-bold text-white">
                    {edition.year}
                  </h3>
                  <p className="text-festival-cyan font-semibold text-lg">
                    {edition.theme}
                  </p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-festival-cyan" />
                    <span>{edition.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-festival-magenta" />
                    <span>{edition.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-festival-purple" />
                    <span>{edition.attendees} bezoekers</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {edition.description}
                </p>

                <div className="flex gap-2">
                  {edition.status === 'upcoming' ? (
                    <a href="https://shop.ikbenaanwezig.nl/tickets/event/ut-koekoekfest?fbclid=PAZXh0bgNhZW0CMTEAAacB9P3ZlY24kFUQBAyvSGyh6cw_9DSWx67GUi-7xx8b-6d0nbjcsagBnEflpA_aem_7SDiEyu_ZTrz8gclIi6cyQ" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gradient-to-r from-festival-cyan to-festival-magenta hover:from-festival-magenta hover:to-festival-cyan text-white font-semibold rounded-full">
                        <Music className="w-4 h-4 mr-2" />
                        TICKETS
                      </Button>
                    </a>
                  ) : (
                    <>
                      <Button variant="outline" className="flex-1 border-festival-magenta text-festival-magenta hover:bg-festival-magenta hover:text-white">
                        AFTERMOVIE
                      </Button>
                      <Button variant="outline" className="flex-1 border-festival-cyan text-festival-cyan hover:bg-festival-cyan hover:text-black">
                        FOTO'S
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditionsSection;
