import { Facebook, Instagram, Twitter, Youtube, Music, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/koekoeksfest/', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const festivalInfo = [
    { label: 'Artiesten', href: '#artists' },
    { label: 'Timetable', href: '#timetable' },
    { label: 'Tickets', href: '#tickets' },
    { label: 'Info', href: '#info' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-festival-cyan to-festival-magenta rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-orbitron font-bold text-white">
                Ut' <span className="text-festival-cyan">Koekoeksfest</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Het ultieme hardstyle festival in het hart van Nederland. Elk jaar brengen we de beste artists, 
              de meest geavanceerde productie en een onvergetelijke ervaring samen.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-festival-cyan rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Festival Links */}
          <div>
            <h3 className="text-lg font-orbitron font-bold text-white mb-6">Festival</h3>
            <ul className="space-y-3">
              {festivalInfo.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-festival-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-orbitron font-bold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-festival-cyan mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Koekoek 26</p>
                  <p>Siebengewald, Nederland</p>
                </div>
              </div>
{/*               <div className="flex items-center gap-3">*/}
{/*                 <Phone className="w-5 h-5 text-festival-cyan flex-shrink-0" />*/}
{/*                 <span className="text-gray-400">+31 20 123 4567</span>*/}
{/*               </div>*/}
{/*               <div className="flex items-center gap-3">*/}
{/*                 <Mail className="w-5 h-5 text-festival-cyan flex-shrink-0" />*/}
{/*                 <span className="text-gray-400">info@koekoeksfest.nl</span>*/}
{/*               </div>*/}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Ut' Koekoeksfest. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <span className="text-gray-500 text-sm">Powered by</span>
            <span className="text-festival-cyan font-semibold text-sm">Dutch Festival Productions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
