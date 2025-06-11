import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { trackTicketLinkClick } from '@/lib/analytics-events';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTicketClick = () => {
    trackTicketLinkClick('navigation');
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Edities', href: '#editions' },
    { label: 'Timetable', href: '/timetable' },
    { label: 'Artiesten', href: '/artists' },
    { label: 'Info', href: '/info' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-festival-cyan/20' : 'bg-black/80'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/Koekoek.png" alt="Ut' Koekoeksfest Logo" className="h-12" />
            <span className="text-2xl font-orbitron font-bold text-white">
              Ut' <span className="text-festival-cyan">Koekoeksfest</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-festival-cyan transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-white hover:text-festival-cyan transition-colors duration-300 font-medium ${
                    location.pathname === item.href ? 'text-festival-cyan' : ''
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <a 
              href="https://shop.ikbenaanwezig.nl/tickets/event/ut-koekoekfest?fbclid=PAZXh0bgNhZW0CMTEAAacB9P3ZlY24kFUQBAyvSGyh6cw_9DSWx67GUi-7xx8b-6d0nbjcsagBnEflpA_aem_7SDiEyu_ZTrz8gclIi6cyQ" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleTicketClick}
            >
              <Button className="bg-gradient-to-r from-festival-cyan to-festival-magenta hover:from-festival-magenta hover:to-festival-cyan text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 animate-pulse-glow">
                Tickets
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-festival-cyan"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-festival-cyan/20">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-white hover:text-festival-cyan transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block px-4 py-2 text-white hover:text-festival-cyan transition-colors duration-300 ${
                      location.pathname === item.href ? 'text-festival-cyan' : ''
                    }`}
                    onClick={() => {
                      handleTicketClick();
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="px-4 pt-2">
                <a 
                  href="https://shop.ikbenaanwezig.nl/tickets/event/ut-koekoekfest?fbclid=PAZXh0bgNhZW0CMTEAAacB9P3ZlY24kFUQBAyvSGyh6cw_9DSWx67GUi-7xx8b-6d0nbjcsagBnEflpA_aem_7SDiEyu_ZTrz8gclIi6cyQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleTicketClick();
                    setIsMenuOpen(false);
                  }}
                >
                  <Button className="w-full bg-gradient-to-r from-festival-cyan to-festival-magenta text-white font-semibold py-2 rounded-full">
                    Tickets
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
