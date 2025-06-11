import { Ticket, Star, Users, Zap, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { trackTicketLinkClick } from '@/lib/analytics-events';

const TicketsSection = () => {
  const ticket = {
    id: 'premium',
    name: 'Premium Experience',
    price: '€48,29',
    originalPrice: null,
    features: [
      'Inclusief eten, bier, wijn en fris'
    ],
    color: 'festival-cyan',
    popular: true
  };

  const handleTicketClick = (ticketType: string) => {
    trackTicketLinkClick(`tickets_section_${ticketType}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold text-white mb-4">
            KOOP <span className="text-festival-cyan">TICKETS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Bemachtig jouw ticket en maak deel uit van de ultieme hardstyle party
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
            <div className="flex items-center gap-2 text-green-400">
              <Ticket className="w-5 h-5" />
              <span className="font-semibold">Limited tickets beschikbaar</span>
            </div>
{/*             <div className="hidden sm:block w-px h-6 bg-gray-600" />*/}
{/*             <div className="flex items-center gap-2 text-festival-cyan">*/}
{/*               <Zap className="w-5 h-5" />*/}
{/*               <span>Vroegboeker korting nog 7 dagen</span>*/}
{/*             </div>*/}
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-festival-cyan/20 to-festival-magenta/20 border-2 border-festival-cyan scale-105 relative card-glow transform hover:scale-105 transition-all duration-300">
{/*             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">*/}
{/*               <span className="bg-gradient-to-r from-festival-cyan to-festival-magenta text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">*/}
{/*                 <Star className="w-4 h-4" />*/}
{/*                 MEEST POPULAIR*/}
{/*               </span>*/}
{/*             </div> */}
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-orbitron font-bold text-white mb-2">
                {ticket.name}
              </CardTitle>
              <div className="flex items-center justify-center gap-3 mb-4">
                {ticket.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through font-semibold">
                    {ticket.originalPrice}
                  </span>
                )}
                <span className="text-4xl font-bold text-festival-cyan">
                  {ticket.price}
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {ticket.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-festival-cyan mt-1">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://shop.ikbenaanwezig.nl/tickets/event/ut-koekoekfest?fbclid=PAZXh0bgNhZW0CMTEAAacB9P3ZlY24kFUQBAyvSGyh6cw_9DSWx67GUi-7xx8b-6d0nbjcsagBnEflpA_aem_7SDiEyu_ZTrz8gclIi6cyQ" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleTicketClick(ticket.id)}
              >
                <Button className="bg-festival-cyan active:bg-festival-magenta text-white font-bold py-3 px-6 rounded-full w-full transition-all duration-200 active:scale-[1.02] active:shadow-lg active:shadow-festival-cyan/20">
                  <Ticket className="w-5 h-5 mr-2" />
                  KOOP NU
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
