import { MapPin, Clock, Users, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfoSection = () => {
  const infoItems = [
    {
      icon: MapPin,
      title: 'Locatie',
      description: 'Koekoek 26',
      details: 'Siebengewald, Nederland'
    },
    {
      icon: Clock,
      title: 'Tijden',
      description: '13:00 - 01:00',
      details: '5 Juli 2025'
    },
    {
      icon: Users,
      title: 'Leeftijd',
      description: '18+ Event',
      details: 'Geldig ID vereist'
    },
    {
      icon: Car,
      title: 'Parkeren',
      description: 'Beperkte parkeergelegenheid',
      details: 'Kom bij voorkeur met de fiets of laat je afzetten'
    }
  ];

  return (
    <section id="info" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Festival <span className="text-festival-cyan">Informatie</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Alle praktische informatie voor jouw ultieme festival ervaring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoItems.map((item, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6 text-center card-glow">
              <div className="w-16 h-16 bg-gradient-to-r from-festival-cyan to-festival-magenta rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-festival-cyan text-lg font-semibold mb-1">{item.description}</p>
              <p className="text-gray-400 text-sm">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-festival-cyan/10 to-festival-magenta/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Wat mag je verwachten?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-festival-cyan mb-2">1 Podium (Mainstage)</h4>
              <p className="text-gray-300">Van hardstyle tot hardcore</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-festival-magenta mb-2">Food & Drinks / Shotjes Bar</h4>
              <p className="text-gray-300">Food truck, bar en shotjes!</p>
            </div>
          </div>
        </div>

        {/* Link to full info page */}
        <div className="text-center mt-12">
          <Link to="/info" className="inline-block bg-gradient-to-r from-festival-cyan to-festival-magenta hover:from-festival-magenta hover:to-festival-cyan text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
            Bekijk Alle Praktische Informatie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;