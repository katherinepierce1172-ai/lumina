import * as React from 'react';
import { Sparkles, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAi: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAi }) => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
          alt="Salon Interior"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs uppercase tracking-widest font-semibold">
            <Sparkles size={12} className="text-accent" />
            <span>Award Winning Studio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
            Redefine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Your Look
            </span>
          </h1>
          
          <p className="text-lg text-white/80 max-w-lg leading-relaxed">
            Experience the art of modern hair styling. From precision cuts to transformative color, our master stylists are here to unveil your best self.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg shadow-xl shadow-accent/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Book Appointment
            </button>
            <button
              onClick={onOpenAi}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles size={20} className="group-hover:text-yellow-300 transition-colors" />
              Find Your Style with AI
            </button>
          </div>
        </div>

        {/* Right side empty for balance or floating card (omitted for cleaner look on mobile) */}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
};