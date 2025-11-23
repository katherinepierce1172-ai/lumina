import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAi: () => void;
}

export const Hero = ({ onOpenBooking, onOpenAi }: HeroProps) => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary">
      
      {/* Background Image - Clean High Res Salon Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2574&auto=format&fit=crop"
          alt="Lumina Salon Interior"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center pt-10">
        <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>Accepting New Clients</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9] tracking-tight">
            Beautiful hair <br />
            <span className="font-light italic text-white/80">starts here.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
            Modern styling for the modern individual. We combine artistry with AI-powered consultation to find your perfect look.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-full font-bold text-base transition-all transform hover:-translate-y-1 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              Book Appointment
            </button>
            <button
              onClick={onOpenAi}
              className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles size={18} className="text-accent group-hover:rotate-12 transition-transform" />
              <span>Try AI Consultant</span>
              <ArrowRight size={18} className="opacity-60 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="pt-8 flex items-center gap-8 text-white/40 text-sm font-medium">
             <div className="flex -space-x-3">
               <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" className="w-10 h-10 rounded-full border-2 border-primary object-cover" />
               <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" className="w-10 h-10 rounded-full border-2 border-primary object-cover" />
               <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64" className="w-10 h-10 rounded-full border-2 border-primary object-cover" />
               <div className="w-10 h-10 rounded-full border-2 border-primary bg-accent flex items-center justify-center text-white text-xs font-bold">+2k</div>
             </div>
             <p>Happy Clients <br/> this year.</p>
          </div>

        </div>
      </div>
    </section>
  );
};