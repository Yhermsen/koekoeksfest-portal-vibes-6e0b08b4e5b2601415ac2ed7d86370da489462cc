import { Clock, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const TimetablePage = () => {
  const schedule = [
    { time: '13:00 - 14:00', artist: 'Opening Set', type: 'opening' },
    { time: '14:00 - 15:00', artist: 'AURELIA', type: 'regular', genre: 'EUPHORIC HARDSTYLE' },
    { time: '15:00 - 16:00', artist: 'PARAMETRICZ', type: 'regular', genre: 'RAWSTYLE' },
    { time: '16:00 - 17:00', artist: 'KILI', type: 'headliner', genre: 'UPTEMPO' },
    { time: '17:00 - 18:00', artist: 'SYHER', type: 'regular', genre: '6 YEAR SPECIAL' },
    { time: '18:00 - 19:00', artist: 'KOZOROG', type: 'regular', genre: 'RAW CLASSICS' },
    { time: '19:00 - 20:00', artist: 'MATT-NESS', type: 'regular', genre: 'RAWSTYLE' },
    { time: '20:00 - 20:30', artist: 'RIZER', type: 'regular', genre: 'HARDSTYLE CLASSICS' },
    { time: '20:30 - 21:30', artist: 'NOCTURNAL', type: 'regular', genre: 'RAWSTYLE' },
    { time: '21:30 - 22:30', artist: 'ROELIE', type: 'regular', genre: 'UPTEMPO' },
    { time: '22:30 - 23:30', artist: 'DARK ENTITIES', type: 'headliner', genre: 'RAWSTYLE' },
    { time: '23:30 - 00:30', artist: 'NOCTURNAL', type: 'headliner', genre: 'RAWSTYLE' },
    { time: '00:30 - 01:00', artist: 'DE EINDSHOW', type: 'closing' }
  ];

  const getItemClass = (type: string) => {
    switch (type) {
      case 'headliner':
        return 'bg-gradient-to-r from-festival-cyan/20 to-festival-magenta/20 border-l-4 border-festival-cyan';
      case 'opening':
      case 'closing':
        return 'bg-festival-purple/10 border-l-4 border-festival-purple';
      case 'break':
        return 'bg-gray-800/50 border-l-4 border-gray-600';
      default:
        return 'bg-black/30 border-l-4 border-gray-700 hover:border-festival-magenta';
    }
  };

  return (
    <section id="timetable" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold text-white mb-4">
            TIME<span className="text-festival-cyan">TABLE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Plan je perfecte festivaldag met ons complete programma
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-festival-cyan" />
              <span>5 Juli 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-festival-magenta" />
              <span>13:00 - 01:00</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-festival-purple" />
              <span>Main Stage</span>
            </div>
          </div>
        </div>

        <Card className="bg-black/40 border border-gray-700 backdrop-blur-lg">
          <CardHeader>
            <h3 className="text-2xl font-orbitron font-bold text-white text-center">
              Main Stage - Programma
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02] ${getItemClass(item.type)}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className={`w-4 h-4 ${
                          item.type === 'headliner' ? 'text-festival-cyan' :
                          item.type === 'break' ? 'text-gray-400' : 'text-festival-magenta'
                        }`} />
                        <span className="text-gray-300 font-mono text-sm">
                          {item.time}
                        </span>
                        {item.type === 'headliner' && (
                          <span className="bg-festival-cyan text-black px-2 py-1 rounded text-xs font-bold">
                            HEADLINER
                          </span>
                        )}
                      </div>
                      <h4 className={`text-lg font-semibold ${
                        item.type === 'headliner' ? 'text-white font-bold' :
                        item.type === 'break' ? 'text-gray-400' : 'text-gray-200'
                      }`}>
                        {item.artist}
                      </h4>
                      {item.genre && (
                        <p className={`text-sm ${
                          item.type === 'headliner' ? 'text-festival-cyan' :
                          item.type === 'break' ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          {item.genre}
                        </p>
                      )}
                    </div>

                    {item.type === 'headliner' && (
                      <div className="mt-2 sm:mt-0">
                        <span className="text-festival-cyan text-2xl">★</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TimetablePage;