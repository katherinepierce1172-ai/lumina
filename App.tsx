import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { AiConsultant } from './components/AiConsultant';
import { BookingModal } from './components/BookingModal';
import { Star } from 'lucide-react';

const App = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="font-sans text-slate-900 bg-cream antialiased">
      <Navbar 
        onOpenBooking={() => setIsBookingOpen(true)} 
        onOpenAi={() => setIsAiOpen(true)}
      />
      
      <main>
        <Hero 
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenAi={() => setIsAiOpen(true)} 
        />
        
        <Services />

        {/* Quick Review Section */}
        <section id="reviews" className="py-20 bg-primary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                 <div className="flex flex-col items-center text-center mb-12">
                    <div className="flex gap-1 text-yellow-400 mb-4">
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight max-w-3xl">
                        "The AI consultation was a game changer. I finally got the cut I didn't know I needed."
                    </h2>
                    <p className="mt-6 text-white/60 font-medium tracking-widest uppercase text-sm">Sarah Jenkins, Loyal Client</p>
                 </div>
            </div>
        </section>

        {/* Gallery Mockup (Grid) */}
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h3 className="text-4xl font-serif font-bold text-primary">Real Results</h3>
                        <p className="text-gray-500 mt-2">Our stylists' recent masterpieces.</p>
                    </div>
                    <button className="text-accent font-medium hover:underline">View All on Instagram</button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-[500px]">
                    <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hair 1" />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2578&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hair 2" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1519699047748-641154637ea0?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hair 3" />
                    </div>
                     <div className="col-span-2 relative rounded-2xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hair 4" />
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Footer />

      <AiConsultant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default App;