import { useState } from 'react';
import { ServiceCategory, ServiceItem } from '../types';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

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
    <section id="services" className="py-32 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
             <span className="w-8 h-px bg-accent"></span> Our Expertise <span className="w-8 h-px bg-accent"></span>
          </span>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Curated Service Menu</h3>
          <p className="max-w-2xl text-secondary leading-relaxed">
            Each service begins with a thorough consultation to ensure we achieve the perfect look for your lifestyle and hair texture.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {Object.values(ServiceCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 transform scale-105'
                  : 'bg-transparent border-gray-200 text-gray-500 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-[2rem] p-8 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{service.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium uppercase tracking-wide">
                    <Clock size={14} />
                    {service.duration}
                  </div>
                </div>
                <div className="text-xl font-serif font-semibold text-primary bg-gray-50 px-4 py-2 rounded-full">{service.price}</div>
              </div>
              
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                {service.description}
              </p>

              <div className="flex items-center justify-between border-t border-gray-50 pt-6 mt-auto">
                <button className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                  Book Appointment <ArrowRight size={16} className="text-accent" />
                </button>
                <Sparkles size={16} className="text-gray-200 group-hover:text-accent transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};