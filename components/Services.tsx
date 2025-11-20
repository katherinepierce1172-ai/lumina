import { useState } from 'react';
import { ServiceCategory, ServiceItem } from '../types';
import { ArrowRight, Clock } from 'lucide-react';

const servicesData: ServiceItem[] = [
  // Haircut
  { id: '1', name: 'Signature Cut & Style', price: '$85+', duration: '60 min', description: 'Consultation, wash, precision cut, and professional blowout.', category: ServiceCategory.HAIRCUT },
  { id: '2', name: 'Barber Cut', price: '$55+', duration: '45 min', description: 'Detailed clipper or scissor work with hot towel finish.', category: ServiceCategory.HAIRCUT },
  { id: '3', name: 'Bang Trim / Neck Clean Up', price: '$25', duration: '15 min', description: 'Quick maintenance for in-between full appointments.', category: ServiceCategory.HAIRCUT },
  
  // Color
  { id: '4', name: 'Full Balayage', price: '$250+', duration: '180 min', description: 'Hand-painted highlights for a natural, sun-kissed gradation.', category: ServiceCategory.COLOR },
  { id: '5', name: 'Root Touch Up', price: '$95+', duration: '90 min', description: 'Grey coverage or base color maintenance.', category: ServiceCategory.COLOR },
  { id: '6', name: 'Gloss / Toner', price: '$65', duration: '45 min', description: 'Refresh tone and add incredible shine.', category: ServiceCategory.COLOR },
  
  // Treatments
  { id: '7', name: 'Keratin Complex', price: '$300+', duration: '150 min', description: 'Long-lasting smoothing treatment to reduce frizz.', category: ServiceCategory.TREATMENT },
  { id: '8', name: 'Deep Conditioning Mask', price: '$35', duration: '15 min', description: 'Intensive moisture repair add-on service.', category: ServiceCategory.TREATMENT },
];

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(ServiceCategory.HAIRCUT);

  const filteredServices = servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Our Menu</h2>
          <h3 className="text-4xl font-serif font-bold text-primary">Expert Care for Your Hair</h3>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.values(ServiceCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Decorative background blob */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all" />

              <div className="relative z-10 flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">{service.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium uppercase tracking-wide">
                    <Clock size={14} />
                    {service.duration}
                  </div>
                </div>
                <div className="text-xl font-serif font-semibold text-primary">{service.price}</div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="relative z-10">
                <button className="text-sm font-semibold text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                  Book This Service <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};