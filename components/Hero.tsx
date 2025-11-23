import { Sparkles, ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAi: () => void;
}

export const Hero = ({ onOpenBooking, onOpenAi }: HeroProps) => {
  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-surface/50 rounded-bl-[100px] z-0 hidden lg:block" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface text-primary text-xs font-bold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>Voted #1 Salon in NY</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-primary leading-[1.1]">
            Experience the <br/>
            <span className="text-accent italic relative">
              Art
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> 
            of Hair.
          </h1>
          
          <p className="text-lg text-secondary max-w-md leading-relaxed">
            Where precision meets personality. Discover your perfect look with our master stylists and AI-powered consultations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-primary text-white hover:bg-gray-900 rounded-full font-bold text-base transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
            >
              Book Appointment
            </button>
            <button
              onClick={onOpenAi}
              className="px-8 py-4 bg-white border border-gray-200 hover:border-accent hover:text-accent text-secondary rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2 group shadow-sm"
            >
              <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
              <span>AI Consultant</span>
            </button>
          </div>
          
          <div className="flex items-center gap-4 pt-6">
             <div className="flex -space-x-3">
               <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Client" />
               </div>
               <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64" alt="Client" />
               </div>
               <div className="w-10 h-10 rounded-full bg-accent text-white border-2 border-white flex items-center justify-center text-xs font-bold">5k+</div>
             </div>
             <div className="flex flex-col">
                <div className="flex text-yellow-400 text-xs">
                  <Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} />
                </div>
                <span className="text-xs font-bold text-primary">5.0 Star Rating</span>
             </div>
          </div>
        </div>

        {/* Right Column: Image Composition */}
        <div className="relative hidden lg:block h-[600px] w-full">
           <div className="absolute top-10 right-0 w-[80%] h-[90%] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                alt="Stylist working"
              />
           </div>
           <div className="absolute bottom-20 left-0 w-[45%] h-[40%] bg-white p-4 rounded-2xl shadow-xl animate-slide-in">
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2578&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-xl"
                alt="Hairstyle detail"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                <ArrowRight size={20} className="-rotate-45" />
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};