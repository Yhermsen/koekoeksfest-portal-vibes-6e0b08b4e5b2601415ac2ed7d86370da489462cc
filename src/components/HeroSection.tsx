import { Play, Calendar, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import VideoPopup from './VideoPopup';
import { trackTicketLinkClick } from '@/lib/analytics-events';

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleTicketClick = () => {
    trackTicketLinkClick('hero_section');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-end sm:items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: 'url(/lovable-uploads/0b62fce5-4992-49d9-9878-aefa78c286b0.png)'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20" />

      {/* Content - Mobile First */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:py-20">
        {/* Date and Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 text-white">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-white" />
            <span className="text-lg sm:text-xl font-medium">5 Juli 2025</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white opacity-60" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-white" />
            <span className="text-lg sm:text-xl font-medium">Siebengewald, Nederland</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a 
            href="https://shop.ikbenaanwezig.nl/tickets/event/ut-koekoekfest?fbclid=PAZXh0bgNhZW0CMTEAAacB9P3ZlY24kFUQBAyvSGyh6cw_9DSWx67GUi-7xx8b-6d0nbjcsagBnEflpA_aem_7SDiEyu_ZTrz8gclIi6cyQ" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleTicketClick}
          >
            <Button size="lg" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-bold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
              KOOP TICKETS
            </Button>
          </a>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
            onClick={() => setIsVideoOpen(true)}
          >
            <Play className="w-5 h-5 mr-2" />
            BEKIJK AFTERMOVIE
          </Button>

          <a
            href="https://www.instagram.com/koekoeksfest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              INSTAGRAM
            </Button>
          </a>
        </div>
      </div>

      <VideoPopup 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="/aftermovie.mp4"
      />
    </section>
  );
};

export default HeroSection;
