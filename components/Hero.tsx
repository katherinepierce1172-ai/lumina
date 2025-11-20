import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAi: () => void;
}

export const Hero = ({ onOpenBooking, onOpenAi }: HeroProps) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2574&auto=format&fit=crop"
          alt="Salon Interior"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center pt-20">
        <div className="lg:col-span-8 space-y-10 animate-fade-in-up">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white/10 transition-colors cursor-default">
            <Sparkles size={14} className="text-accent" />
            <span>Award Winning Studio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.95] tracking-tight">
            Elegance <br />
            <span className="italic text-white/90 font-light">Redefined.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-light border-l-2 border-accent pl-6">
            Experience the art of modern hair styling. From precision cuts to transformative color, our master stylists are here to unveil your best self.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <button
              onClick={onOpenBooking}
              className="group px-8 py-4 bg-accent text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Calendar size={20} />
              <span>Book Appointment</span>
            </button>
            <button
              onClick={onOpenAi}
              className="group px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Sparkles size={20} className="text-yellow-300 group-hover:scale-110 transition-transform" />
              <span>AI Style Consultant</span>
              <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 animate-bounce">
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};