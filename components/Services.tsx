import { useState } from 'react';
import { ServiceCategory, ServiceItem } from '../types';
import { ArrowRight, Clock, Check } from 'lucide-react';

const servicesData: ServiceItem[] = [
  // Haircut
  { id: '1', name: 'Signature Cut & Style', price: '$85+', duration: '60 min', description: 'Consultation, wash, precision cut, and professional blowout.', category: ServiceCategory.HAIRCUT },
  { id: '2', name: 'Barber Cut', price: '$55+', duration: '45 min', description: 'Detailed clipper or scissor work with hot towel finish.', category: ServiceCategory.HAIRCUT },
  { id: '3', name: 'Bang Trim / Clean Up', price: '$25', duration: '15 min', description: 'Quick maintenance for in-between full appointments.', category: ServiceCategory.HAIRCUT },
  
  // Color
  { id: '4', name: 'Full Balayage', price: '$250+', duration: '180 min', description: 'Hand-painted highlights for a natural, sun-kissed gradation.', category: ServiceCategory.COLOR },
  { id: '5', name: 'Root Touch Up', price: '$95+', duration: '90 min', description: 'Grey coverage or base color maintenance.', category: ServiceCategory.COLOR },
  { id: '6', name: 'Gloss / Toner', price: '$65', duration: '45 min', description: 'Refresh tone and add incredible shine.', category: ServiceCategory.COLOR },
  
  // Treatments
  { id: '7', name: 'Keratin Complex', price: '$300+', duration: '150 min', description: 'Long-lasting smoothing treatment to reduce frizz.', category: ServiceCategory.TREATMENT },
  { id: '8', name: 'Deep Conditioning', price: '$35', duration: '15 min', description: 'Intensive moisture repair add-on service.', category: ServiceCategory.TREATMENT },
];

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(ServiceCategory.HAIRCUT);

  const filteredServices = servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-xs mb-3 bg-accent/10 px-3 py-1 rounded-full">Our Expertise</span>
          <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">Service Menu</h3>
          <p className="max-w-xl text-secondary leading-relaxed">
            Transparent pricing. Exceptional skill. Designed for all hair types and textures.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.values(ServiceCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-white text-secondary border-transparent hover:border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-start h-full"
            >
              <div className="w-full flex justify-between items-start mb-4">
                <span className="bg-surface text-primary font-bold px-4 py-1.5 rounded-full text-sm">
                  {service.price}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-gray-400 uppercase tracking-wide bg-gray-50 px-2 py-1 rounded">
                  <Clock size={12} /> {service.duration}
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-primary mb-3">{service.name}</h4>
              <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="w-full pt-6 border-t border-gray-50 flex justify-between items-center">
                 <button className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all group-hover:text-accent">
                  Book Now <ArrowRight size={14} className="text-accent" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};