import React from 'react';
import { MapPin, Clock, Users, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const InfoPage = () => {
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

  // Coordinates for Koekoek 26, Siebengewald, Nederland
  const latitude = 51.650;
  const longitude = 6.067;

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

        {/* Floor Plan and Map Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Plattegrond & Navigatie</h3>
          <div className="flex flex-col items-center">
            {/* Floor Plan Image */}
            <img
              src="/floorplan.png"
              alt="Festival Floor Plan"
              className="w-full max-w-xl h-auto rounded-lg shadow-lg mb-8"
            />

            {/* Embedded Google Map */}
            <div className="w-full max-w-xl h-80 mb-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Maps Location"
                src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Navigation Links */}
            <div className="flex justify-center space-x-4">
              {/* Google Maps Link */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Koekoek+26,+Siebengewald,+Nederland"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              >
                Navigeer via Google Maps
              </a>

              {/* Apple Maps Link */}
              <a
                href="http://maps.apple.com/?daddr=Koekoek+26,+Siebengewald,+Nederland"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              >
                Navigeer via Kaarten (Apple)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage; 